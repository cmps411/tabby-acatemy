import React from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

function HookLogout() {
  const logout = () => {
    Axios({
      method: "GET",
      url: "/api/logout",
    })
      .then()
      .catch((err) => console.log(err));
      window.location.href = "/"
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
