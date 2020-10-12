import React, { useState, useEffect } from "react";
import Axios from "axios";

function HookProfile() {
  const [, setData] = useState(null);

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
      {/*data ? <authenticatedProfile /> : you must be logged in to view this page!*/}
    </div>
  );
}

export default HookProfile;
