import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                        <Nav.Link as={Link} eventKey={2} to="/about" className="text-white fs-5">About</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/blogs" className="text-white fs-5">Blogs</Nav.Link>
                        {/* <Nav.Link as={Link} eventKey={2} to="/contact" className="text-white fs-5">Contact</Nav.Link> */}
                    </Nav>
                    <Nav>
                        {user ?
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={user.email}
                                menuVariant="info"
                                className="text-white fs-5"
                            >
                                <NavDropdown.Item as={Link} to="/manage-inventories" className="text-info fs-5">Manage Inventories</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/add-items" className="text-info fs-5">Add Items</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myItems" className="text-info fs-5">My Items</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => signOut(auth)} className="text-info fs-5">Logout</NavDropdown.Item>
                            </NavDropdown>
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