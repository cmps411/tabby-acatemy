import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HookHome from "./components/homepage.component";
import Navbar from "./components/navbar.component";
import HookAuthentication from "./components/authentication.component";
import HookCourseHome from "./components/courseHome.component";
import Footer from './components/Footer';
import "./components/CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className='page-container'>
    <div className="content-wrap">
      
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={HookHome} />
        <Route path="/login" component={HookAuthentication} />
        <Route path='/courses' component={HookCourseHome} />
      </div>
    </Router>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
