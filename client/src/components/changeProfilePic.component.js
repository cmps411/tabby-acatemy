import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col } from "react-bootstrap";

function HookChangeProfilePic() {
  const [profilePicSrc, setProfilePicSrc] = useState("");

  const changeProfilePic = () => {
    Axios({
      method: "PUT",
      data: {
        image: profilePicSrc
      },
      withCredentials: true,
      url: "/api/changeProfilePic",
    }).then((window.location.href = "/profile")).catch((err) => console.log(err));
  };

  return (
    <div>
      <Form className="m-0">
        <Form.Row className="justify-content-md-center m-4">
          <Col xs="auto">
            <Form.Control
              onChange={(e) => setProfilePicSrc(e.target.value)}
              type="text"
              placeholder="Enter Image Src"
            />
          </Col>

          <Button variant="warning" onClick={changeProfilePic}>
            Update Profile Picture
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
}

export default HookChangeProfilePic;