import {Component} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IAppState} from '../Types/AppTypes';
import {logout} from '../Services/authService';
import {logoutUser} from '../Redux/Actions/UserActions';

export interface LogoutProps {
    logoutUser:Function;
    history:[string];
}
class Logout extends Component<LogoutProps> {
    componentDidMount(){
        logout();
        this.props.logoutUser();
        window.location.assign('/');
        // this.props.history.push('/');
    }
    render() { 
        return null;
    }
}
const mapStateToProps = (state:IAppState) : IAppState=> {
	return state;
}

const mapDispatchToProps = (dispatch:Dispatch ) => {
	return {
        logoutUser: bindActionCreators(logoutUser,dispatch)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Logout);
 
// export default Logout;