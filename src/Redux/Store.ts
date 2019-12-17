import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {rootReducer} from './Reducers/index';
import {IAppState} from '../Types/AppTypes'

export default function configureStore(initialState:IAppState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
        );
}