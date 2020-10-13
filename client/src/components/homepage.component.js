import React, { useState, useEffect } from "react";
import Axios from "axios";
import './CSS/homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Button, Form} from 'react-bootstrap'

function HookHome() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: "/api/register",
    }).then((res) => console.log(res));
  };

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
    <div>
      <div style={{position:'relative'}}>
        <img
          src="tabbyAcatemy.png"
          width= "100%"
          style={{textAlign: "left", verticalAlign:"middle", position:'relative'}}
          alt='Background'
        />

        <div style={{textAlign: "left", position:'absolute', top:'6rem', left:'5rem'}}>
          <h1>Welcome to Tabby Acatemy!</h1>
          <p>Home of Pupaws</p>
          <br/>
          <br/>

          {data ? <div><h2>How are you today, {data.username}?</h2></div> : null}

          <h4>Join today!</h4>
          <br/>
          <Form style={{width:'15rem'}}>
              <Form.Group>
                <Form.Control
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  type="text"
                  placeholder="Your Username"
                />
                <br/>
                <Form.Control
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  type="email"
                  placeholder="Your E-mail"
                />
                <br/>
                <Form.Control
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  type="password"
                  placeholder="Your Password"
                />
                <br/>
              <Button variant="warning" onClick={register}>
                Register
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
      
      <body>
        <Card class='col-sm-8' style={{border: 'none', margin: '3rem'}}>
          
          <Card.Body>
          <Card.Title>
              <h4>About Us</h4>
          </Card.Title>
            
            <Card.Text class='row'>
              <div className='col-sm-8'>
                Tabby Acatemy is a website aimed at helping people learn a variety of different topics with the aid of friendly felines to guide our users to through their learning experience.
              </div>
              <div className='colImg'>
                <Card.Img 
                className='AboutImg' 
                src={require('../images/cat-cap-gown.png')}
                height="100%"
                width="100%"
                />  
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card class='col-sm-8' style={{border: 'none', margin: '3rem'}}>
          <Card.Body>
            <Card.Title>
              <h4>Our Mission</h4>
            </Card.Title>
            <Card.Text className='row'>
              <div className='col-sm-8'>
                Our goal is to be able to provide a productive, fun, and relaxing learning expereince through the use of cats throughout the course lectures and assignments
              </div>
              <div className='colImg'>
                <Card.Img 
                className='AboutImg2' 
                src={require('../images/cap_cat.jpg')}
                width="100%"
                height="100%"
                />  
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        {/*
        <Card>
          <Card.Body>
            <Card.Title>
              About Tabby Acatemy
            </Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card> */}

      </body>
    </div>
  );
}

export default HookHome;
