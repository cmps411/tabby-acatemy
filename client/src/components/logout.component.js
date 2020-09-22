import React from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

function HookLogout() {


  const logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/auth/logout",
    }).then((res) => console.log(res)).catch((err) => console.log(err));
  };
  return (
    <div>

      <Button variant='outline-info' onClick={logout}>logout</Button>

    </div>
  );
}

export default HookLogout;