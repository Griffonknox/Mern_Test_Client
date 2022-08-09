import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import dateFormat from 'dateformat';

import Profile from "./profile";


const Blog = (props) => (
    <Accordion.Item eventKey={props.blog._id}>
    <Accordion.Header>{dateFormat(props.blog.dateCreated, "mmmm dS, yyyy")} - {props.blog.type} - {props.blog.userName}</Accordion.Header>
    <Accordion.Body className="cell">
        {props.blog.description}
    </Accordion.Body>
    </Accordion.Item>
);


export default function BlogView() {
const [blogs, setBlogs] = useState([]);

// This method fetches the blogs from the database.
useEffect(() => {
    async function getBlogs() {
    const response = await fetch(`http://localhost:5000/blog/`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const blogs = await response.json();
    console.log(blogs);
    setBlogs(blogs);
    }

    getBlogs();

    return;
    }, [blogs.length]);

// This method will map out the blogs on a table
 function blogList() {
    return blogs.map((blog) => {
      return (
        <Blog
          blog={blog}
        />
      );
    });
  }

 // HomePage.
 return (
    <Container>
    <Row>

     <Profile />
    
    <Col xs={7} className="mt-3 p-3">

        <Accordion>
            {blogList()}
        </Accordion>

    </Col>
    </Row>
    </Container>
 );
}