import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default function Profile() {

 // Profile Display
 return (  
    <Col xs={5} className="mt-3 p-3">
        <Card>
      <Card.Body>
        <Row>
            <Col xs={8}>
                <Card.Title>Griffonknox</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Crawling in ya Dm's</Card.Subtitle>
                <Card.Text>
                Biography
                </Card.Text>
                <Card.Link href="#">Edit Profile</Card.Link>
                <Card.Link href="/bg">Create Blog</Card.Link>
            </Col>
            <Col xs={4}>
            PROFILE PICTURE
            </Col>
        </Row>
      </Card.Body>
    </Card>
    </Col>

 );
}