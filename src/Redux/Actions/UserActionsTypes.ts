import  {IUser}  from '../../Types/AppTypes';


export const LOGIN_USER ='LOGIN_USER';
export const LOGIN_USER_SUCCESS ='LOGIN_USER_SUCCESS';
export const LOGOUT_USER ='LOGOUT_USER';


interface LoginUserAction {
    type: typeof LOGIN_USER;
    payload: IUser;
}
interface LoginUserSuccessAction {
    type: typeof LOGIN_USER_SUCCESS;
    payload: IUser;
}

interface LogoutUserAction {
    type: typeof LOGOUT_USER;
}


export type UserActionTypes = LoginUserAction | LoginUserSuccessAction | LogoutUserAction;