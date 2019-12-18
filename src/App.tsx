import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import {connect} from 'react-redux';
import Main from './Components/Main/Main';
import Logout from './Components/logout';
import Login, { LoginProps } from './Components/Login/Login';
import Profile,{ProfileProps} from "./Components/Profile/Profile";
import Tasks, {TasksProps} from "./Components/Tasks/Tasks";
import NavBar from './Components/NavBar/NavBar';
import ProtectedRout from './Components/Common/ProtectedRout';
import NotFound from './Components/NotFound/NotFound';
import {IUser, IAppState, IAppUserState, ITasksState} from './Types/AppTypes';
import {getCurrentUser} from './Services/authService';

// import './App.css';
interface Props {
  userState:IAppUserState,
  tasksState:ITasksState
}

const App: React.FC<Props> = (props:Props) => {
    const user = getCurrentUser();
    

  return (
    <React.Fragment>
      <NavBar user={/*props.userState.user*/user as IUser}></NavBar>
      <Switch>
        <Route path="/main" component={Main}></Route>
        <ProtectedRout path="/tasks" render={(props:TasksProps) => <Tasks {...props}/>} />
        <Route path="/login"  render={(props:LoginProps) => <Login {...props}/>}></Route>
        <Route path="/logout" component={Logout} />
        <ProtectedRout path="/profile" render={() => <Profile user={props.userState.user}/>} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/main" />
        <Redirect to="/not-found" />
      </Switch>


    </React.Fragment>
  );
}
const mapStateToProps = (state:IAppState) : IAppState=> {
  return state
}

export default connect(mapStateToProps)(App);

// export default App;