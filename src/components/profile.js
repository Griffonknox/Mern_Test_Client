import React from "react";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Profile() {

 // Profile Display
 return (
     
    <Col xs={4} className="mt-3 p-3">
        <Card>
      <Card.Body>
        <Card.Title>Griffonknox</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Crawling in ya Dm's</Card.Subtitle>
        <Card.Text>
          Biography
        </Card.Text>
        <Card.Link href="#">Create Blog</Card.Link>
      </Card.Body>
    </Card>
    </Col>

 );
}