import React from 'react'
import "./header.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
    return (
        <div className="header">

        
        <Navbar bg="light" expand="lg">
      <Container fluid>
      <a className="navbar-brand" href="/">
                    <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="Bootstrap" width="50" height="44" />
                </a>
        <Navbar.Brand href="/">Backgroung PNG!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/wallpapers">Wallpapers</Nav.Link>
            <Nav.Link href="/backgrounds">
              Backgrounds
            </Nav.Link>
            <Nav.Link href="/pngs">PNGs</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>




    )
}
