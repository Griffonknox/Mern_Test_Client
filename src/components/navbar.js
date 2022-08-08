import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Here, we display our Navbar
export default function Navbargo() {
 return (
  <Navbar bg="success" variant="dark">
    <Container fluid>
    <Navbar.Brand href="#home">BloggerNauts</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/record_list">Records List</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
    </Container>
</Navbar>
 );
}