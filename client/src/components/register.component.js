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
      url: "/api/register",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>New User?</h1>
      <Form>
        <Form.Row className="justify-content-md-center">
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setRegisterUsername(e.target.value)}
              type="text"
              placeholder="Your Username"
            />
          </Col>
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setRegisterEmail(e.target.value)}
              type="email"
              placeholder="Your E-mail"
            />
          </Col>

          <Col xs="auto">
            <Form.Control
              onChange={(e) => setRegisterPassword(e.target.value)}
              type="password"
              placeholder="Your Password"
            />
          </Col>

          <Button variant="warning" onClick={register}>
            Register
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

export default HookRegister;
