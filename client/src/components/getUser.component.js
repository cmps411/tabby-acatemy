/*import React, { useState } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

function HookGetUser() {
  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1>Get User</h1>
      <Button variant="warning" onClick={getUser}>
        Submit
      </Button>
      {data ? <h1>Welcome Back {data.username}</h1> : null}
    </div>
  );
}

export default HookGetUser;
*/