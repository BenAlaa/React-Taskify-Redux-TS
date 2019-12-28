import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import {connect} from 'react-redux';
import Main from './Components/Main/Main';
import Logout from './Components/logout';
import Login from './Components/Login/Login';
import Profile from "./Components/Profile/Profile";
import Tasks from "./Components/Tasks/Tasks";
import NavBar from './Components/NavBar/NavBar';
import HOCProtectedRout from './Components/Common/HOCProtectedRout';
import NotFound from './Components/NotFound/NotFound';
import {IUser, IAppState, IAppUserState} from './Types/AppTypes';
import {getCurrentUser} from './Services/authService';

// import './App.css';
interface Props {
  userState:IAppUserState
}

const App: React.FC<Props> = (props:Props) => {
    const user = getCurrentUser();

  return (
    <React.Fragment>
      <NavBar user={/*props.userState.user*/user as IUser}></NavBar>
      <Switch>
        <Route path="/main" component={Main}></Route>
        {/* <ProtectedRout path="/tasks" render={(props:TasksProps) => <Tasks {...props}/>} /> */}
        <Route path="/tasks" component={HOCProtectedRout(Tasks)} />
        <Route path="/login"  render={(props) => <Login {...props} history={props.history}/>}></Route>
        <Route path="/logout" component={Logout} />
        {/* <ProtectedRout path="/profile" render={() => <Profile user={props.userState.user}/>} /> */}
        <Route path="/profile" component={HOCProtectedRout(Profile)} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/main" />
        <Redirect to="/not-found" />
      </Switch>


    </React.Fragment>
  );
}
const mapStateToProps = (state:IAppState) : IAppUserState=> {
  return state.user;
}

export default connect(mapStateToProps)(App);

// export default App;