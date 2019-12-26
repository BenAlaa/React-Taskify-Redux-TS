import React,{ Component } from 'react';
import {connect} from 'react-redux';
import  {IUser, IAppState}  from '../../Types/AppTypes';
import image from '../Login/Assets/icon_login_grey.png';
import './Profile.css';
export interface ProfileProps {
    user:IUser|null;
}
 
const Profile: React.SFC<ProfileProps> = ({user}:ProfileProps) => {
    console.log('Profile User : ',user);
    return ( 
        <div className="container profile-container">
            <img src={image} className="profile-image row offset-3 offset-sm-3 offset-md-4 offset-lg-5 offset-xl-5"></img>
            <div className="user-name row offset-3 offset-sm-3 offset-md-4 offset-lg-5 offset-xl-5">{user?.name}</div>
            <div className="user-title row offset-3 offset-sm-3 offset-md-4 offset-lg-5 offset-xl-5">{user?.title}</div>
            <div className="profile-info-container row col-10 offset-1">
                <div className="row col-12 info-container">
                    <div className="info-key col-md-3 col-lg-2">Email  :</div>
                    <div className="info-value col-md-9 col-lg-10">{user?.email}</div>
                </div>
                <div className="row col-12 info-container">
                    <div className="info-key col-md-3 col-lg-2">Bio  :</div>
                    <div className="info-value col-md-9 col-lg-10">{user?.bio}</div>
                </div>
                <div className="row col-12 info-container">
                    <div className="info-key col-md-3 col-lg-2">Birthday  :</div>
                    <div className="info-value col-md-9 col-lg-10">{user?.dateOfBirth}</div>
                </div>
                <div className="row col-12 info-container">
                    <div className="info-key col-md-3 col-lg-2">Age  :</div>
                    <div className="info-value col-md-9 col-lg-10">{`${user?.age} years`}</div>
                </div>
                <div className="row col-12 info-container">
                    <div className="info-key col-md-3 col-lg-2">Hobbies  :</div>
                    <div className="info-value col-md-9 col-lg-10">{user?.hobbies}</div>
                </div>
            </div>
        </div>
     );
}
 
// const mapStateToProps = (state:IAppState) : IUser | null=> {
//     return state.user.user;
// }

// export default connect(mapStateToProps)(Profile);
export default Profile