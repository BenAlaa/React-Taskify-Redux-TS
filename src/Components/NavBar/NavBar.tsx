import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/Logo/logo.png';
import "./NavBar.css";

export interface NavBarProps {
    user: any;
}

const NavBar: React.SFC<NavBarProps> = ({ user }) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light  navbar-inner fixed-top unAuth-navbar ">
            <div className="container">
                <NavLink className="navbar-brand" to="/main"><img src={logo} alt="logo" className="logo" />Taskify</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto  mt-2 mt-lg-0 ">
                        <li className="nav-item active navbar-item col-lg-2">
                            <NavLink className="nav-link " to="/main">Main </NavLink>
                        </li>



                        <li className="nav-item navbar-item">
                            <NavLink className="nav-link" to="/tasks">ToDo</NavLink>
                        </li>
                        {user &&
                            <li className="nav-item navbar-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                        }

                        {!user &&
                            <li className="nav-item navbar-item">
                                <NavLink className="nav-link" to="/login">login</NavLink>
                            </li>
                        }
                        {user &&
                            <React.Fragment>
                                <li className="nav-item dropdown navbar-item">
                                    <NavLink className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {user.name}
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink className="dropdown-item" to="/tasks">ToDo</NavLink>
                                        <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                                        <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
                                    </div>
                                </li>
                            </React.Fragment>

                        }
                    </ul>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;