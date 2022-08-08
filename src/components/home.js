import React from "react";
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Profile from "./profile";

export default function Home() {

 // HomePage.
 return (
    <Container>
    <Row>

     <Profile />
    
    <Col xs={8}>
    <Alert variant="success" className="mt-3">
    <Alert.Heading>BloggerNauts</Alert.Heading>
    <p>
        Aww yeah, experimenting with some React developement along with the React-Bootstrap framework.
        Lets experiment with creating a small project with full Crud commands and maybe even Authentication.
    </p>
    <hr />
    <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
    </p>
    </Alert>
    </Col>
    </Row>
    </Container>
 );
}