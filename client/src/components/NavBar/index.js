import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Navi() {
    return (
<Navbar bg="dark" expand="lg" variant="primary" >
  <Navbar.Brand href="#home">Google Books</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Search</Nav.Link>
      <Nav.Link href="#link">Saved</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );
}

export default Navi;