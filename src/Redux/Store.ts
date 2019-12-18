import {createStore} from 'redux';
import {rootReducer} from './Reducers/indexReducer';



export default function configureStore(){
    return createStore(rootReducer);
}