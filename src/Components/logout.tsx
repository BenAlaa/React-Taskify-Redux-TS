import {Component} from 'react';
import {logout} from '../Services/authService';
 
class Logout extends Component {
    componentDidMount(){
        logout();
        window.location.assign('/');
    }
    render() { 
        return null;
    }
}
 
export default Logout;