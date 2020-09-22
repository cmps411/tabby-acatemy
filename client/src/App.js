import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";


import HookHome from "./components/homepage.component";
import Navbar from "./components/navbar.component";
import HookAuthentication from "./components/authentication.component";
import HookCourseHome from "./components/courseHome.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={HookHome} />
        <Route path="/login" component={HookAuthentication} />
        <Route path='/courses' component={HookCourseHome} />
      </div>
    </Router>
  );
}

export default App;
