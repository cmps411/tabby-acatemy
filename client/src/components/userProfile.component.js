import React, { useState, useEffect } from "react";
import Axios from "axios";

function HookProfile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
     {data ? <h1>{data.id}</h1> : null}
    </div>
  );
}

export default HookProfile;
