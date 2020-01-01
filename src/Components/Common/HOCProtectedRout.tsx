import * as React from 'react';
import { History } from 'history';


export interface HOCProtectedRoutProps {
    history:History<any>;
}
 
export interface HOCProtectedRoutState {
    
}
 

 

export default function(ComposedComponent: any, isLoggedIn: Boolean) {


    class HOCProtectedRout extends React.Component<HOCProtectedRoutProps, HOCProtectedRoutState> {
        componentDidMount(){
            if(!isLoggedIn){
                this.props.history.push('/login');
            }
        }
        render() { 
            return ( 
                <ComposedComponent {...this.props} />
             );
        }
    }
     
    return HOCProtectedRout;
}
