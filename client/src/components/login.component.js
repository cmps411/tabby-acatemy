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
      url: "http://localhost:5000/auth/google",
    })
      .then(
        (window.location.href =
          "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile&client_id=66597841321-k12b065nv1v0c15ed698spbbcjsj9dbh.apps.googleusercontent.com")
      )
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
      url: "http://localhost:5000/login",
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
