import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import HookGetUser from "./components/getUser.component";
import HookHome from "./components/homepage.component";
import Navbar from "./components/navbar.component"
import HookAuthentication from "./components/authentication.component";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route path="/" exact component={HookHome} />
  <Route path="/login" component ={HookAuthentication} />
      <HookGetUser />
    </div>
    </Router>
  );
}

export default App;
