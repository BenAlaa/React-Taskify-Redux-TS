import {LOGIN_USER, LOGOUT_USER, UserActionTypes} from '../Actions/UserActionsTypes';
import {IUser,IAppUserState} from '../../Types/AppTypes';

const initialState : IAppUserState = {
    user:null,
    isLoggedIn:false
}

export default function userReducer(state=initialState, action:UserActionTypes):IAppUserState{
    switch(action.type){
        case LOGIN_USER:
            return{
                user:action.payload,
                isLoggedIn:true
            }
        case LOGOUT_USER:
            return{
                user:null,
                isLoggedIn:false
            }
        default:
            return state
    }
}