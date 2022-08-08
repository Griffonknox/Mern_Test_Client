import React, { useState } from "react";
import { useNavigate } from "react-router";
import Profile from "./profile";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function CreateBlog() {
 const [form, setForm] = useState({
   userName: "",
   type: "",
   description: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newBlog = { ...form };
 
//    await fetch("http://localhost:5000/blog/add", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newBlog),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//    });
 
   setForm({ name: "", position: "", level: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (

    <Container>
    <Row>
     <Profile />
    
    <Col xs={7} className="mt-3 p-3">

        <h3>Create New Blog</h3>

        <Form onSubmit={onSubmit}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control 
            size="md" 
            type="text" 
            placeholder="User Name"
            value={form.userName}
            onChange={(e) => updateForm({ userName: e.target.value })}
             />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
         */}

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>

    </Col>
    </Row>
    </Container>

 );
}