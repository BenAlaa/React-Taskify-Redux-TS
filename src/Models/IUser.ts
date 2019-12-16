export default interface IUser{
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