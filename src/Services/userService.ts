import http from './httpService';
import  IUser  from './../Models/IUser';
import { async } from 'q';


export async function getUser(id:number,res?:string){
    const users = await http.get('data.json')
    .then((res) => res.data.users)
    .catch((err) => console.log('something wromg happen while getting data:',err));

    const user:IUser = users.find((user : any) => user.id === id);
    if(!user) return res="400";
    return user;
}

export async function getUsers(){
    const users = await http.get('data.json')
        .then((res) => res.data.users)
        .catch((err) => console.log('something wromg happen while getting data:', err));
    return users;
}