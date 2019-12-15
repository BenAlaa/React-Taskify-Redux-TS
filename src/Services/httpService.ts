import axios from "axios";

export function setJwt(jwt:string):void{
    axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
    get: axios.get,
    setJwt
}