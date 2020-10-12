import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col } from "react-bootstrap";

function HookLogin() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const Glogin = () => {
    Axios({
      method: "GET",
      url: "/api/auth/google",
    })
      .then()
      .catch((err) => console.log(err));
  };

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/login",
    }).then(window.location.href = "/").catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form className="m-0">
        <Form.Row className="justify-content-md-center m-4">
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setLoginUsername(e.target.value)}
              type="email"
              placeholder="Enter Username"
            />
          </Col>

          <Col xs="auto">
            <Form.Control
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </Col>
          <Button variant="outline-info" onClick={login}>
            login
          </Button>

          <Button variant="outline-info" onClick={Glogin}>
            Google Login
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

export default HookLogin;
