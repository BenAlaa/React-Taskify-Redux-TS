
export interface ILoginState{
    data:{
        email:string;
        password:string;
    };
    errors:{
        email:string;
        password:string;
    }
}
export interface IUser{
    id: number;
    name: string;
    email: string;
    password?: string;
    age?: number;
    dateOfBirth?: string;
    title?: string;
    bio?: string;
    hobbies?:string[];
}


export interface IAppUserState {
    user:IUser|null;
    isLoggedIn:boolean;
}


export interface ICategory{
    id: Number;
    name:string;
}

export interface ICategoryState{
    selectedCategory:ICategory
}

export interface ITask{
    id: number;
    description:string;
    categoryId:number;
    userId:number;
    isCompleted:boolean;
}

export interface ITasksState{
    tasks:ITask[];
}

export enum Categories {
    Sports = 0,
    Investigations = 1,
    Work = 2,
    Entertainment = 3,
    SimpleToDo = 4

}


export interface IAppState{
    user:IAppUserState;
    tasks:ITasksState;
}
