import React, { useState } from "react";
import Axios from "axios";
import { Button, Form } from "react-bootstrap";

function HookRegister() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Register</h1>
      <Form>
      <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setRegisterUsername(e.target.value)}
            type="email"
            placeholder="Enter Username"
          />
        </Form.Group>
      
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setRegisterEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setRegisterPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Button variant='outline-info' onClick={register}>Register</Button>
      </Form>


    </div>
  );
}

export default HookRegister;
