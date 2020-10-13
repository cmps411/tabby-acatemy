import React, { useState, useEffect } from "react";
import Axios from "axios";
import HookLogout from "./logout.component";
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
     {data ? 
     <div>
       <h1>{data.username}</h1> 
       <div><HookLogout /></div>
     </div>
     
     : null}
    </div>
  );
}

export default HookProfile;
