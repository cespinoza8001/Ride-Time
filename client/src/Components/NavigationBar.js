import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'


function NavigationBar({ currentUser, setCurrentUser }){


    return (
    <Styles>
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/">RideTime <i class="fas fa-motorcycle"></i></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <NavDropdown title="Rentals" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="/rentals">View Rentals</NavDropdown.Item>
                   <NavDropdown.Item href="/newrental">Create Rental</NavDropdown.Item>
                   <NavDropdown.Item href="/myrentals">My Rentals</NavDropdown.Item>
                   </NavDropdown>
                   <Nav.Item><Nav.Link href="/messages">Messages</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/favorites">Favorites</Nav.Link></Nav.Item> 
                   <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    );
}



export default NavigationBar;

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        

    &:hover {
        color: white;
    }

    .sticky-nav {
  position: sticky;
  top: 0;
}
}
`;
