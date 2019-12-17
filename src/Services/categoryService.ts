import http from './httpService';
import {ICategory} from '../Types/AppTypes';
// import { Response } from './authService';

export async function getCategories(){
    let categories:any[] = await http.get('data.json')
    .then((res) => res.data.categories)
    .catch((err) => console.log('something wromg happen while getting categories data:',err));
    const ICategorys:ICategory[]=categories;
    return ICategorys;
}