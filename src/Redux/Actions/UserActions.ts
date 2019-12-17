
import  {IUser}  from '../../Types/AppTypes';
import {LOGIN_USER, LOGOUT_USER, UserActionTypes} from './UserActionsTypes';



export function loginUser (user:IUser):UserActionTypes {
    return {
        type:LOGIN_USER,
        payload:user
    };
}

export function logoutUser ():UserActionTypes {
    return {
        type: LOGOUT_USER
    };
}