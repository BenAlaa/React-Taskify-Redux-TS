import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Main from './Components/Main/Main';
import Logout from './Components/logout';
import Login from './Components/Login/Login';
import Profile,{ProfileProps} from "./Components/Profile/Profile";
import Tasks, {TasksProps} from "./Components/Tasks/Tasks";
import NavBar from './Components/NavBar/NavBar';
import ProtectedRout from './Components/Common/ProtectedRout';
import NotFound from './Components/NotFound/NotFound';
import {IUser} from './Types/AppTypes';
import {getCurrentUser} from './Services/authService';

// import './App.css';

const App: React.FC = () => {
    const user = getCurrentUser();
    

  return (
    <React.Fragment>
      <NavBar user={user}></NavBar>
      <Switch>
        <Route path="/main" component={Main}></Route>
        <ProtectedRout path="/tasks" render={(props:TasksProps) => <Tasks {...props}/>} />
        <Route path="/login" component={Login}></Route>
        <Route path="/logout" component={Logout} />
        <ProtectedRout path="/profile" render={(props:ProfileProps) => <Profile {...props}/>} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/main" />
        <Redirect to="/not-found" />
      </Switch>


    </React.Fragment>
  );
}

export default App;