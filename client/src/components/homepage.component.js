import React from "react";
import './CSS/homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container} from 'react-bootstrap'


function HookHome() {
  return (
    <div className="homePage">
      <header className = "Acatemy Header">
      <h1>Welcome to Tabby Acatemy!</h1>
        {/* <Card classname = "card-body" style= {{}}>
          <Card.Img src={require('./cat-cap-gown.png')}/>
        </Card> */}
      </header>
      <body>
        <Card className='AboutCard'>
          <Card.Body>
            <Card.Title>
              <h4 className='AboutHeader'>About Tabby Acatemy</h4>
            </Card.Title>
            <Card.Text className='row'>
              <div className='col'>
                Tabby Acatemy is a website aimed at helping people learn a variety of different topics, similiar to many other websites. 
                What makes Tabby Acatemy different is the use of our favorite feline friends to help aid and guide our users to through their learning experience.
              </div>
              <div className='colImg'>
                <Card.Img className='AboutImg' src={require('../images/cat-cap-gown.png')}/>  
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='AboutCard'>
          <Card.Body>
            <Card.Title>
              <h4 className='AboutHeader'>Mission of Tabby Acatemy</h4>
            </Card.Title>
            <Card.Text className='row'>
              <div className='col'>
                Our goal is to be able to provide a productive, fun, and relaxing learning expereince through the use of cats throughout the course lectures and assignments
              </div>
              <div className='colImg'>
                <Card.Img className='AboutImg2' src={require('../images/cap_cat.jpg')}/>  
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
