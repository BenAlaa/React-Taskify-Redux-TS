import * as React from 'react';
import {connect} from 'react-redux';
import { History } from 'history';
import { IAppState } from './../../Types/AppTypes';
import { thisTypeAnnotation } from '@babel/types';


export interface HOCProtectedRoutProps {
    isLoggedIn:Boolean;
    history:History<any>;
}
 
export interface HOCProtectedRoutState {
    
}
 

 

export default function(ComposedComponent: any) {


    class HOCProtectedRout extends React.Component<HOCProtectedRoutProps, HOCProtectedRoutState> {
        componentWillMount(){
            if(!this.props.isLoggedIn){
                this.props.history.push('/login');
            }
        }
        render() { 
            return ( 
                <ComposedComponent {...this.props} />
             );
        }
    }
    function mapStateToProps(state: IAppState) {
        return{
            isLoggedIn: state.user.isLoggedIn
        }
    }
     
    return connect(mapStateToProps)(HOCProtectedRout);
}
