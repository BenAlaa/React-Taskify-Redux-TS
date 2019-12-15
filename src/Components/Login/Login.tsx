import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {getCurrentUser} from '../../Services/authService';

import Input from "../Common/Input/Input";
import loginImage from './Assets/icon_login_grey.png';
import "./login.css";

export interface LoginProps {
    
}
 
export interface LoginState {
    
}
 
class Login extends Component<LoginProps, LoginState> {
    state = { 
        data: { email: '', password: '' },
        errors: {}  
    }
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
								<form className="col-12" /*onSubmit={this.handleSubmit}*/>
									<Input /*onChange={this.handleChange}*/ name="email" id="email" value={data.email} type="email" label="Email" /*error={errors.email}*/ placeholder="Email" focus={true}/>
									<Input /*onChange={this.handleChange}*/ name="password" id="password" value={data.password} type="password" label="Password" /*error={errors.password}*/ placeholder="Password" />
									<button /*disabled={this.validate()}*/ type="submit" className=" sub-btn col-3 offset-5">Login</button>
								</form>
							</div>
				</div>
			</div>
         );
    }
}
 
export default Login;