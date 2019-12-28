
import { Dispatch } from 'redux';
import  {IUser}  from '../../Types/AppTypes';
import {LOGIN_USER, LOGOUT_USER, UserActionTypes} from './UserActionsTypes';
import {getUser} from '../../Services/userService';




// export function loginUser (user:IUser):UserActionTypes {
//     return {
//         type:LOGIN_USER,
//         payload:user
//     };
// }

// Redux Thunk
export function loginUser (username:string) {
    return function(dispatch:Dispatch) {
        return getUser(username)
            .then(user => {
                dispatch(loginUserSuccess(user as IUser));
            })
            .catch( err => {
                throw err;
            });
    }
}

export function loginUserSuccess (user:IUser):UserActionTypes {
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