import React from "react";
import HookRegister from "./register.component";
import HookLogin from "./login.component";
//import HookGetUser from "./getUser.component";

function HookAuthentication() {
  return (
    
    <div>
      <br/>
      <HookLogin />
      <br/>
      <HookRegister />
      <br/>
      <br/>
      {/*<HookGetUser />*/}
    </div>
  );
}

export default HookAuthentication;
