import '../App.css';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return(
        <Navbar color="danger" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Navigation;