import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col } from "react-bootstrap";

function HookLogin() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const Glogin = () => {
window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Fguarded-forest-58961.herokuapp.com%2Fauth%2Fgoogle%2Fcallback&scope=profile&client_id=66597841321-k12b065nv1v0c15ed698spbbcjsj9dbh.apps.googleusercontent.com"
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
    })
    .then()
    .catch((err) => console.log(err));
    window.location.href = "/"
  };

  return (
    <div>
      <h1>Login</h1>
      <Form className="m-0">
        <Form.Row className="justify-content-md-center m-4">
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setLoginUsername(e.target.value)}
              type="text"
              placeholder="Your Username"
            />
          </Col>

          <Col xs="auto">
            <Form.Control
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="Your Password"
            />
          </Col>
          <Button variant="warning" onClick={login} style={{marginRight:'0.5rem'}}>
            Log In
          </Button>

          <Button variant="warning" onClick={Glogin}>
            Google Login
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

export default HookLogin;
