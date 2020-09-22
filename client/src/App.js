import React from "react";
import "./App.css";
import HookRegister from "./components/register.component";
import HookLogin from "./components/login.component";
import HookGetUser from "./components/getUser.component";

function App() {
  return (
    <div className="App">
      <HookRegister />
      <HookLogin />
      <HookGetUser />
    </div>
  );
}

export default App;
