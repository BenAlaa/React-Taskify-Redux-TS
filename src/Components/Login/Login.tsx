import React, {Component} from 'react';
import {Dispatch} from 'redux';

import { Redirect } from 'react-router-dom';
import { IAppState, IUser, IAppUserState } from '../../Types/AppTypes';
import {getCurrentUser, Response} from '../../Services/authService';
import {getUser} from '../../Services/userService';
import {login} from '../../Services/authService';
import Input from "../Common/Input/Input";
import {connect, ConnectedProps} from 'react-redux';
import {loginUser} from '../../Redux/Actions/UserActions';
import {UserActionTypes} from '../../Redux/Actions/UserActionsTypes';
import loginImage from './Assets/icon_login_grey.png';
import "./login.css";

export interface LoginProps {
    // loginUser(user:IUser):UserActionTypes;
}
 
export interface LoginState {
    data:{
		email:string;
		password:string;
	};
	errors:{
		email:string;
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
        data: {email: '', password: '' },
		errors: {email: '', password: ''}
		  
	}

	handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const {email, password} = this.state.data;
		const response = await login(email, password);
		if(response === Response.Success){
			const user =await getUser(email);
			const AppUser :IUser=user as IUser;
			console.log('login action',loginUser(user as IUser))
			console.log('Login props ',this.props);
			console.log('App User: ',AppUser);
			window.location.pathname = '/tasks';
		}
		else if(response === Response.Fail){
			const errors={email:"Not Valid Email or Password",password:"Not Valid Email or Password"}
			this.setState({errors});
		}
	};
	
	handleChange = (event:React.FormEvent<HTMLFormElement>) => {
		const data = { ...this.state.data };
		const {name, value} = event.currentTarget;
		switch (name) {
			case "email":
				data.email=value;
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
								<Input onChange={this.handleChange} name="email" id="email" value={data.email} type="email" label="Email" error={errors.email} placeholder="Email" focus={true}/>
								<Input onChange={this.handleChange} name="password" id="password" value={data.password} type="password" label="Password" error={errors.password} placeholder="Password" />
								<button type="submit" className=" sub-btn col-3 offset-5">Login</button>
							</form>
						</div>
				</div>
			</div>
         );
    }
}

 
const mapStateToProps = (state:IAppUserState) : IAppUserState=> {
	return state;
}

const mapDispatchToProps = (dispatch:Dispatch ) => {
	return {
		loginUser: (user : IUser) => {
			dispatch(loginUser(user))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);