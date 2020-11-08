import React from "react";
import "./CSS/App.css";

function HookCursor() {
  var mouseX = 0
  var mouseY = 0
  var timeout;

  document.addEventListener('mousemove', e => {  
    mouseX = e.pageX
    mouseY = e.pageY
    document.querySelector('div.cursor').setAttribute("style", "top: "+(e.pageY - 5)+"px; left: "+(e.pageX - 5)+"px;")
  })
  document.onmousemove = function(){
    
    document.querySelector('div.cat').setAttribute("style", "opacity: 0%;")
    document.querySelector('img.catImg').setAttribute("src", "")
    //RandomCat(num);
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      
      var num = Math.floor(Math.random()*10)
      RandomCat(num);

      document.querySelector('div.cat').setAttribute(
        "style", "top: "+(mouseY - imageArray[num].posY)+"px; left: "+(mouseX - imageArray[num].posX)+
        "px; opacity: 100%;"
    )}, 5000)
    
  }

  const imageArray = [
    {url:"https://media.giphy.com/media/l1KdbLchzSCf5w4co/giphy.gif", posX:"430", posY:"150", imgSize:"50%"},
    {url:"https://media.giphy.com/media/CWQxY7xVoPbq/giphy.gif", posX:"560", posY:"210", imgSize:"50%"},   
    {url:"https://media.giphy.com/media/118A3TUPCSiw6Y/giphy.gif", posX:"570", posY:"150", imgSize:"50%"}, 
    {url:"https://media.giphy.com/media/MKr4bTcFs3Iu4/giphy.gif", posX:"450", posY:"140", imgSize:"60%"}, 
    {url:"https://media.giphy.com/media/Lp5wuqMOmLUaAd0jBG/giphy.gif", posX:"500", posY:"110", imgSize:"50%"},     
    {url:"https://media.giphy.com/media/mRakmooNljBjW/giphy.gif", posX:"390", posY:"120", imgSize:"60%"},      
    {url:"https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif", posX:"430", posY:"70", imgSize:"60%"},      
    {url:"https://media.giphy.com/media/Sw6D7jp2F22nn73e5h/giphy.gif", posX:"550", posY:"200", imgSize:"60%"},  
    {url:"https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif", posX:"450", posY:"160", imgSize:"50%"},       
    {url:"https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif", posX:"480", posY:"100", imgSize:"60%"},       
  ]
  
  function RandomCat(num){
    
    document.querySelector('img.catImg').setAttribute("src", imageArray[num].url)
    document.querySelector('img.catImg').setAttribute("style", "height:" + imageArray[num].imgSize)
    
  }

    return (
      <>
      <div class="cat">
        <img class="catImg" src={RandomCat} alt="ayy"></img>
      </div>
      <div class="cursor"></div>
      </>
    )
}

export default HookCursor;