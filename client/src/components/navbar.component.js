import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap';

function HookNavbar() {
const [data, setData] = useState(null);

useEffect (() => {
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
      <Navbar className="navbar navbar-dark bg-dark navbar-expand-lg">
        
        <Link to="/" className="navbar-brand" color="warning">
          <img
            src='https://webstockreview.net/images/paw-clipart-yellow-dog-9.png'
            width="50"
            height="50"
            alt="Icon"
          />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/code" className="nav-link">
                Code
              </Link>
            </li>
            <li className="navbar-item">
              <Link to='/profile' className="nav-link" style={{maxHeight: 50}}>
            {data ? <div><p>{data.username}</p></div> : null}
            </Link>
            </li>
            <li className="navbar-item">
              <Link to='/profile' className="nav-link" style={{maxHeight: 50}}>
            {data ? <div><img style={{maxHeight: 40}} src={data.image} alt='Avatar'></img></div> : null}
            </Link>
            </li>
            
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default HookNavbar;