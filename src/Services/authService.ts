import http from './httpService';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import IUser  from './../Models/IUser';
import {getUsers} from './userService';

const tokenKey: string = "token";



export async function login(email: string, password: string, res?: string) {
    const users = await getUsers();
    const user: IUser = users.find((user: any) => user.email === email);
    if (!user) return res = "400";

    const isValidPassword: boolean = user.password === password;
    if (!isValidPassword) return res = "400";

    const token = generateAuthToken(user);
    if (!token) return res = "400";

    localStorage.setItem(tokenKey, token);
    return res = "200";
}

export function loginWithJwt(jwt: string) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function generateAuthToken(user: IUser): string {
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, "jwtPrivateKey");
    return token;
}

export function getCurrentUser() {
    try {
        const jwt =JSON.stringify(localStorage.getItem(tokenKey));
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}