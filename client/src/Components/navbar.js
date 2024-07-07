import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Books</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Books" id="basic-nav-dropdown">
              <LinkContainer to="/books/fiction">
                <NavDropdown.Item>Fiction</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/books/non-fiction">
                <NavDropdown.Item>Non-Fiction</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/books/academics">
                <NavDropdown.Item>Academics</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/books/sports">
                <NavDropdown.Item>Sports</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/books/religious">
                <NavDropdown.Item>Religious</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/books/poetry">
                <NavDropdown.Item>Poetry</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/books/competative exam">
                <NavDropdown.Item>competative Exams</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />           
            </NavDropdown>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#cart">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
