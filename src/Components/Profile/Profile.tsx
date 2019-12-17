import React,{ Component } from 'react';
import  {IUser}  from '../../Types/AppTypes';

export interface ProfileProps {
    user:IUser;
}
 
const Profile: React.SFC<ProfileProps> = () => {
    return ( 
        <div>Profile</div>
     );
}
 
export default Profile;