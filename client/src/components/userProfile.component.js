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
    <br/>
    <br/>
     {data ? 
     <div>
       <h1>{data.username}</h1> 
       <br/>
       <img src={data.image} alt='Avatar'></img>
       <div><HookLogout /> <HookChangeProfilePic /></div>
       <br/>
       <h2>Achievements</h2>
       <hr></hr>
       <p>You have none yet!</p>
       <br/>
       <h2>Certificates</h2>
       <hr></hr>
       <p>Study for a certificate today!</p>
       <br/>
       <p>Member since: {data.date}</p>
     </div>
     
     : null}
    </div>
  );
}

export default HookProfile;
