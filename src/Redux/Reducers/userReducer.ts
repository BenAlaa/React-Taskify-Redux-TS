import {LOGIN_USER, LOGOUT_USER, UserActionTypes} from '../Actions/UserActionsTypes';
import {IAppUserState} from '../../Types/AppTypes';

const initialState : IAppUserState = {
    user:null,
    // {
    //     id:1,
    //     name:"Ahmed Alaa",
    //     username:"Admin",
    //     title:"Software Engineer",
    //     age:25,
    //     dateOfBirth:"24-07-1994",
    //     bio:"I'm a Full-Stack Software developer. "
    //     +"I graduated from faculty of Engineering Assiut University-Egypt. "
    //     +"I had 9-months technical diploma from (ITI)- Smart Village,Egypt. "
    //     +"I have a solid experience in Node.js, Meteor, Loopback, React.js, React Native, Angular and MongoDB. "
    //     +"I understand the basics of UI/UX design. ",
    //     hobbies:["-Table Tennis.   ","-Drawing and Sketching.   ","-Swimming.   "]
    // },
    isLoggedIn:false
}

const userReducer = (state=initialState, action:UserActionTypes):IAppUserState => {
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

export default userReducer;