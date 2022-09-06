import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";

import axios from "axios";


function Contact() {
  const [validated, setValidated] = useState(false);

  const name = useRef("");
  const message = useRef("");
  const email = useRef("");

  function addUserHandler() {
    var payload = {

      Name: name.current.value,
      Message: message.current.value,
      Email: email.current.value,

    };

    axios
      .post("https://personalbackendreact.azurewebsites.net/Register", payload)
      .then((response) => {

      });
  };
  
  return (
    <div class="contact">
      <h1 class="contactheader">Contact me:</h1>
      <Form validate={validated} onSubmit={handleSubmit}>
        <Form.Group class="box" controlId="validationName">
          <Form.Control required ref={name} id="mb-3" type="text" placeholder=" First Name*"  />
        </Form.Group>
        <br></br>
        <Form.Group controlId="validationEmail">

          <Form.Control required type={email} id="mb-3" placeholder=" Email Address*" defaultValue="nicholaswu498@gmail.com"  />
          
        </Form.Group>
        <br></br>
        <Form.Group controlId="formMessage">

          <Form.Control as="textarea" id="mb-5" placeholder=" Message" type="text" ref={message} />
        </Form.Group>

        <div class="space"></div>

      </Form>
      <Button id="contactbutton" type="submit" onClick={addUserHandler}>
        Submit
      </Button>
      <div class="space"></div>
    </div>
  );

}

export default Contact;