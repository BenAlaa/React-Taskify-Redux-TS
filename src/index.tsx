import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { BaseCSS } from 'styled-bootstrap-grid';
import configureStore from "./Redux/Store";

import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import 'font-awesome/css/font-awesome.min.css'
import { IAppUserState } from './Types/AppTypes';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <BaseCSS/>
            <App userState={store.getState().user as IAppUserState} />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));
