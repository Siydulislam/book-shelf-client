import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Book Shelf</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} eventKey={2} to="/items">Items</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/authors">Authors</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/reviews">Reviews</Nav.Link>
                        <Nav.Link as={Link} eventKey={2} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} eventKey={2} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;