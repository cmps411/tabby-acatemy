import React from "react";
import HookRegister from './register.component';
import HookLogin from "./login.component";

function HookAuthentication() {
    return (
        <div>
        <HookRegister />
        <HookLogin />
        </div>
    );
  }
  
  export default HookAuthentication;