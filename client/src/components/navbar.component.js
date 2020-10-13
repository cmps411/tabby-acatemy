import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {Navbar} from 'react-bootstrap';
import Paw from '../images/pawPrint.svg'

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
            src={Paw}
            width="1rem"
            height="1rem"
            alt=""
          />
          Tabby Acatemy
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
              <Link to='/profile' className="nav-link">
            {data ? <p>{data.username}</p> : null}
            </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default HookNavbar;