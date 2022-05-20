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
                <Navbar.Brand as={Link} to="/" className="fs-3">Book Shelf</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} eventKey={2} to="/items" className="text-white fs-5">Items</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/authors" className="text-white fs-5">Authors</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/reviews" className="text-white fs-5">Reviews</Nav.Link>
                        {/* <Nav.Link as={Link} eventKey={2} to="/contact" className="text-white fs-5">Contact</Nav.Link> */}
                    </Nav>
                    <Nav>
                        {user && <Nav.Link as={Link} eventKey={2} to="/manage-inventories" className="text-white fs-5">
                            Manage Inventories
                        </Nav.Link>}
                        {user && <Nav.Link as={Link} eventKey={2} to="/add-items" className="text-white fs-5">
                            Add Items
                        </Nav.Link>}
                        {user && <Nav.Link as={Link} eventKey={2} to="/myItems" className="text-white fs-5">
                            My Items
                        </Nav.Link>}
                        {user ?
                            <Nav.Link onClick={() => signOut(auth)} eventKey={2} className="text-white fs-5">
                                Logout
                            </Nav.Link>
                            :
                            <Nav.Link as={Link} eventKey={2} to="/login" className="text-white fs-5">
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