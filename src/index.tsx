import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from "./Redux/Store";
import {getCurrentUser} from './Services/authService';
import { IAppState,IUser } from './Types/AppTypes';

import App from './App';
// import * as serviceWorker from './serviceWorker';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import 'font-awesome/css/font-awesome.min.css'

const initialState:IAppState ={
    user: {
        user:null,
        isLoggedIn:false
    },
    tasks:{
        tasks:[
            {
                id:0,
                description:"",
                userId:0,
                categoryId:0,
                isCompleted:false
            }
        ]
    }

}
const store = configureStore(/*initialState*/);
console.log("App state : ",store.getState());

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App userState={store.getState().user} tasksState={store.getState().tasks}/>
    </Provider>

        
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
