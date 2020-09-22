import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

function HookLogin() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form>
      <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setLoginUsername(e.target.value)}
            type="email"
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Button variant='outline-info' onClick={login}>login</Button>
      </Form>
    </div>
  );
}

export default HookLogin;
