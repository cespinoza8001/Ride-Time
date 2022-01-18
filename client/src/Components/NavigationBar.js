import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'


function NavigationBar(){
    return (
    <Styles>
        <Navbar expand="lg" sticky="top">
            <Navbar.Brand href="/home">Ride Time</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                   <Nav.Item><Nav.Link href="/">Login</Nav.Link></Nav.Item> 
                   <Nav.Item><Nav.Link href="/rentals">Rentals</Nav.Link></Nav.Item>
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
        color: #bbb;
        

    &:hover {
        color: white;
    }
}
`;
