import React from "react";



function HookHome() {
  return (
    <div className="homePage">
      <header className = "Acatemy Header">
      <h1>Welcome to Tabby Acatemy!</h1>
      <p className="MissionStatement">The goal of Tabby Acatemy is to help teach important subject fields through the light-heart theme of tabby cats!</p>
        {/* <Card classname = "card-body" style= {{width: "18rem", height: "200px", align: "center"}}>
          <Card.Img src={require('./cat-cap-gown.png')}/>
        </Card> */}
      </header>
    </div>
  );
}

export default HookHome;
