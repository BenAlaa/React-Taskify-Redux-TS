import React, {Component} from 'react';
import {Dispatch,bindActionCreators} from 'redux';

import { Redirect } from 'react-router-dom';
import { IAppState, IUser } from '../../Types/AppTypes';
import { History } from 'history';
import {getCurrentUser, Response} from '../../Services/authService';
import {login} from '../../Services/authService';
import Input from "../Common/Input/Input";
import {connect} from 'react-redux';
import {loginUser} from '../../Redux/Actions/UserActions';
import {loadTasks} from '../../Redux/Actions/TasksActions';
import {UserActionTypes} from '../../Redux/Actions/UserActionsTypes';
import loginImage from './Assets/icon_login_grey.png';
import "./login.css";

export interface LoginProps {
	loginUser:Function;
	loadTasks:Function;
	history:History<any>
}
 
export interface LoginState {
    data:{
		username:string;
		password:string;
	};
	errors:{
		username:string;
		password:string;
	};
	// user?:IUser
}
interface IMapStateToProps{

}
interface IMapDispatchToProps{
	loginUser:(user:IUser) => UserActionTypes;
}
type LoginUserProps =IMapStateToProps&IMapDispatchToProps
class Login extends Component<LoginProps, LoginState> {
    state:LoginState = { 
        data: {username: '', password: '' },
		errors: {username: '', password: ''}
		  
	}

	handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const {username, password} = this.state.data;
		const response = await login(username, password);
		if(response === Response.Success){
			this.props.loginUser(username);
			this.props.history.push('/tasks');
			
		}
		else if(response === Response.Fail){
			const errors={username:"Not Valid Username or Password",password:"Not Valid Username or Password"}
			this.setState({errors});
		}
	};
	
	handleChange = (event:React.FormEvent<HTMLFormElement>) => {
		const data = { ...this.state.data };
		const {name, value} = event.currentTarget;
		switch (name) {
			case "username":
				data.username=value;
			break;
			case "password":
				data.password=value;
			break;
		
			default:
				break;
		}
		this.setState({ data });
	};
    render() { 
        if(getCurrentUser()) return <Redirect to ="/"/>
        const { data, errors } = this.state;
        return (
            <div className="container base-container col-lg-5 col-xl-4 col-md-8 col-xm-10">
				<div className="row container-fluid form-container col-12   " /*ref={this.props.containerRef}*/>
						<div className="row  header col-3 offset-5 ">Login</div>
						<div className="row image col-6 offset-3">
							<img src={loginImage} className="login-avatar col-12" alt ="login sympol"/>
						</div>
						<div className="row form col-12 ">
							<form className="col-12" onSubmit={this.handleSubmit}>
								<Input onChange={this.handleChange} name="username" id="username" value={data.username} type="text" label="Username" error={errors.username} placeholder="Username" focus={true}/>
								<Input onChange={this.handleChange} name="password" id="password" value={data.password} type="password" label="Password" error={errors.password} placeholder="Password" />
								<button type="submit" className=" sub-btn col-3 offset-5">Login</button>
							</form>
						</div>
				</div>
			</div>
         );
    }
}

 
const mapStateToProps = (state:IAppState) : IAppState=> {
	return state;
}

const mapDispatchToProps = (dispatch:Dispatch ) => {
	return {
		loginUser: bindActionCreators(loginUser, dispatch),
		loadTasks: bindActionCreators(loadTasks, dispatch)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);