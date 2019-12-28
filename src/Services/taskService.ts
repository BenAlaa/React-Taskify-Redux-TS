import http from './httpService';
import {ITask} from '../Types/AppTypes';
// import { Response } from './authService';

export async function getTasks(){
    let tasks:any[] = await http.get('data.json')
    .then((res) => res.data.todoItems)
    .catch((err) => console.log('something wromg happen while getting tasks data:',err));
    const ITasks:ITask[]=tasks;
    return ITasks;
}