import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { BaseContainer, FormContainer, Header, LoginAvatarContainer, LoginAvatar, FormWrapper, LoginForm, Button } from './LoginStyledComponents';
import { IAppState, IUser } from '../../Types/AppTypes';
import { History } from 'history';
import { getCurrentUser, Response } from '../../Services/authService';
import { login } from '../../Services/authService';
import Input from "../Common/Input/Input";
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/Actions/UserActions';
import { loadTasks } from '../../Redux/Actions/TasksActions';
import { UserActionTypes } from '../../Redux/Actions/UserActionsTypes';
import loginImage from './Assets/icon_login_grey.png';

export interface LoginProps {
	loginUser: Function;
	loadTasks: Function;
	history: History<any>
}

export interface LoginState {
	data: {
		username: string;
		password: string;
	};
	errors: {
		username: string;
		password: string;
	};
	// user?:IUser
}
interface IMapStateToProps {

}
interface IMapDispatchToProps {
	loginUser: (user: IUser) => UserActionTypes;
}
type LoginUserProps = IMapStateToProps & IMapDispatchToProps
class Login extends Component<LoginProps, LoginState> {
	state: LoginState = {
		data: { username: '', password: '' },
		errors: { username: '', password: '' }

	}

	handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { username, password } = this.state.data;
		const response = await login(username, password);
		if (response === Response.Success) {
			this.props.loginUser(username);
			// this.props.history.push('/tasks');
			this.props.history.location.pathname = "/tasks";


		}
		else if (response === Response.Fail) {
			const errors = { username: "Not Valid Username or Password", password: "Not Valid Username or Password" }
			this.setState({ errors });
		}
	};

	handleChange = (event: React.FormEvent<HTMLFormElement>) => {
		const data = { ...this.state.data };
		const { name, value } = event.currentTarget;
		switch (name) {
			case "username":
				data.username = value;
				break;
			case "password":
				data.password = value;
				break;

			default:
				break;
		}
		this.setState({ data });
	};
	render() {
		if (getCurrentUser()) return <Redirect to="/" />
		const { data, errors } = this.state;
		return (
			<BaseContainer>
				<FormContainer>
					<Header>Login</Header>
					<LoginAvatarContainer>
						<LoginAvatar src={loginImage} ></LoginAvatar>
					</LoginAvatarContainer>
					<FormWrapper>
						<LoginForm onSubmit={this.handleSubmit}>
							<Input onChange={this.handleChange} name="username" id="username" value={data.username} type="text" label="Username" error={errors.username} placeholder="Username" focus={true}/>
							<Input onChange={this.handleChange} name="password" id="password" value={data.password} type="password" label="Password" error={errors.password} placeholder="Password" />
							<Button>Login</Button>
						</LoginForm>
					</FormWrapper>
				</FormContainer>
			</BaseContainer>
		);
	}
}


const mapStateToProps = (state: IAppState): IAppState => {
	return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		loginUser: bindActionCreators(loginUser, dispatch),
		loadTasks: bindActionCreators(loadTasks, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);