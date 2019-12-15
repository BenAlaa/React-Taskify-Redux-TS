import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import {getCurrentUser} from '../../Services/authService';


export interface ProtectedRoutProps {
    path:string;
    Component?:React.ReactType;
    render?:any;
}
 
const ProtectedRout: React.SFC<ProtectedRoutProps> = ({path,Component,render,...rest}) => {
    const user = getCurrentUser();
    return ( 
        <Route
            path={path}
            {...rest} 
            render = {props => {
                if(!user) return <Redirect 
                to={{
                    pathname:"/login",
                    state:{from: props.location}
                }}    
                />;
                return Component? <Component {...props}/>: render(props);
            }}
        />
     );
}
 
export default ProtectedRout;