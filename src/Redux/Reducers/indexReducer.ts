import userReducer from './userReducer';
import tasksReducer from './tasksReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers<any>({
    user: userReducer,
    tasks: tasksReducer
});

export type RootState = ReturnType<typeof rootReducer>
 