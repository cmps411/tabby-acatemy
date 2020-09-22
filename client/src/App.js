import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HookRegister from "./components/register.component";
import HookLogin from "./components/login.component";
import HookGetUser from "./components/getUser.component";
import HookHome from "./components/homepage.component";

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/home" exact component={HookHome} />
      <HookRegister />
      <HookLogin />
      <HookGetUser />
    </div>
    </Router>
  );
}

export default App;
