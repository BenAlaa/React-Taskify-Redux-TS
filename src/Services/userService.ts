import http from './httpService';
import  {IUser}  from '../Types/AppTypes';
import { Response } from './authService';


export async function getUser(email:string,res?:Response){
    const users = await http.get('data.json')
    .then((res) => res.data.users)
    .catch((err) => console.log('something wromg happen while getting data:',err));

    const user:IUser = users.find((user : any) => user.email === email);
    if(!user) return res=Response.Fail;
    return user;
}

export async function getUsers(){
    const users = await http.get('data.json')
        .then((res) => res.data.users)
        .catch((err) => console.log('something wromg happen while getting data:', err));
    return users;
}