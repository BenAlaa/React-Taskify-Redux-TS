import  IUser  from './IUser';
import  ITask  from './ITask';
import ICategory from './ICategory';


export interface IAppState{
    user?:IUser;
    categories:ICategory[];
    selectedCategory:ICategory;
    tasks:ITask[];
}