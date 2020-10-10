import React, { useState } from "react";
import Axios from "axios";
import { Button, Form, Col } from "react-bootstrap";

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
      url: "/register",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Register</h1>
      <Form>
        <Form.Row className="justify-content-md-center">
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setRegisterUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setRegisterEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Col>

          <Col xs="auto">
            <Form.Control
              onChange={(e) => setRegisterPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </Col>

          <Button variant="outline-info" onClick={register}>
            Register
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

export default HookRegister;
