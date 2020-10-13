import React, { useState, useEffect } from "react";
import Axios from "axios";
import HookLogout from "./logout.component";
import HookChangeProfilePic from "./changeProfilePic.component";

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
       <img src={data.image}></img>
       <div><HookLogout /> <HookChangeProfilePic /></div>
       <hr></hr>
       <h2>Achievements</h2>
       <hr></hr>
       <h2>Certificates</h2>
       <hr></hr>
       <p>Member since: {data.date}</p>
     </div>
     
     : null}
    </div>
  );
}

export default HookProfile;
