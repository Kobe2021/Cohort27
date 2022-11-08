import { Link, NavLink } from "react-router-dom";
import * as userService from '../utilities/users-service';


const NavBar = (prop) => {
    const {user, setUser} = prop
    
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
    return(
        <nav>
            <NavLink to='/orders' className='some-class'>Order History</NavLink> &nbsp; | &nbsp;
            <NavLink to='/orders/new'>New Order</NavLink> &nbsp;
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
            &nbsp;&nbsp;<span>Welcome, {user.name}</span>
        </nav>
    );
};

export default NavBar;