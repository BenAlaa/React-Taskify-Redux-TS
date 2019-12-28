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

const store = configureStore();
console.log("App state : ",store.getState());

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App userState={store.getState().user} />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));
