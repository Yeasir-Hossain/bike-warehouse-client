import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
import { Container,Navbar,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logo.png'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <>
            <Navbar className='sh' collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='nav-brand' as={Link} to="/">
                        <img height={50} width={100} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#bikes">Bikes</Nav.Link>
                            <Nav.Link href="home#summary">Sales Summary</Nav.Link>
                            <Nav.Link href="home#featured">Featured Bikes</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="add">Add Bike</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage Bikes</Nav.Link>
                                <Nav.Link as={Link} to="myitems">My Bike(s)</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}> <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                                :
                                <Nav.Link as={Link} to="login">
                               <FontAwesomeIcon icon={faArrowRightToBracket} />
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;