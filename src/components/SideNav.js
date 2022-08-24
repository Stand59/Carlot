import App from "../App";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

const SideNav = () => {
    return(
        <body className="pink">
            <div >
                <a href="#">About</a>
                <br></br>
                <a href="#">Services</a>
                <br></br>
                <a href="#">Clients</a>
                <br></br>
                <a href="#">Contact</a>
            </div>
        </body>
    );
};

export default SideNav;