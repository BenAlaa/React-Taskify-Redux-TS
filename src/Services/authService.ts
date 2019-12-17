import http from './httpService';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import {IUser}  from '../Types/AppTypes';
import {getUsers} from './userService';

const tokenKey: string = "token";


export enum Response{
    Success,
    Fail
}
async function login(email: string, password: string, res?: Response) {
    const users = await getUsers();
    const user: IUser = users.find((user: any) => user.email === email);
    if (!user) return res = Response.Fail;

    const isValidPassword: boolean = user.password === password;
    if (!isValidPassword) return res = Response.Fail;

    const token = generateAuthToken(user);
    if (!token) return res = Response.Fail;

    localStorage.setItem(tokenKey, token);
    return res = Response.Success;
}

function loginWithJwt(jwt: string) {
    localStorage.setItem(tokenKey, jwt);
}

function logout() {
    localStorage.removeItem(tokenKey);
}

function generateAuthToken(user: IUser): string {
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, "jwtPrivateKey");
    return token;
}

function getCurrentUser() {
    try {
        const jwt =JSON.stringify(localStorage.getItem(tokenKey));
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

function getJwt() {
    return localStorage.getItem(tokenKey);
}

export{
    login,
    loginWithJwt,
    logout,
    generateAuthToken,
    getCurrentUser,
    getJwt
}