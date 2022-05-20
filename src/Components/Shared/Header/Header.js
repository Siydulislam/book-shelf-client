import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Auth/firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Book Shelf</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} eventKey={2} to="/items">Items</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/authors">Authors</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/reviews">Reviews</Nav.Link>
                        {/* <Nav.Link as={Link} eventKey={2} to="/contact">Contact</Nav.Link> */}
                    </Nav>
                    <Nav>
                        {user && <Nav.Link as={Link} eventKey={2} to="/manage-inventories">
                            Manage Inventories
                        </Nav.Link>}
                        {user && <Nav.Link as={Link} eventKey={2} to="/add-items">
                            Add Items
                        </Nav.Link>}
                        {user && <Nav.Link as={Link} eventKey={2} to="/myItems">
                            My Items
                        </Nav.Link>}
                        {user ?
                            <Nav.Link onClick={() => signOut(auth)} eventKey={2}>
                                Logout
                            </Nav.Link>
                            :
                            <Nav.Link as={Link} eventKey={2} to="/login">
                                Login
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;