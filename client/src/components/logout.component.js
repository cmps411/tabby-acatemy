import React from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

function HookLogout() {
  const logout = () => {
    Axios({
      method: "GET",
      url: "/api/logout",
      withCredentials: true,
    })
      .then(window.location.href = "/")
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button variant="warning" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
}

export default HookLogout;
