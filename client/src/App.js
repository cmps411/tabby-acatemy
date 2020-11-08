import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HookHome from "./components/homepage.component";
import Navbar from "./components/navbar.component";
import Cursor from "./components/cursor.component";
import HookAuthentication from "./components/authentication.component";
import HookCourseHome from "./components/courseHome.component";
import HookProfile from "./components/userProfile.component";
import Footer from './components/Footer';
import "./components/CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";





function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Navbar />
        <Cursor />
        {/* <div className="cursor"></div>
        <script>
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
        </script> */}

        <Route path="/" exact component={HookHome} />
        <Route path="/login" component={HookAuthentication} />
        <Route path='/courses' component={HookCourseHome} />
        <Route path='/profile' component={HookProfile} />
      </div>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
