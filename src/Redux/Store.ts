import {createStore,applyMiddleware} from 'redux';
import {rootReducer} from './Reducers/indexReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



export default function configureStore(){
    return createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, thunk)));
}