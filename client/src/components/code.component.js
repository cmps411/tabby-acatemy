import React from "react";
import {  Button, Form } from "react-bootstrap";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/mode-javascript";

function HookCode() {
  var scriptOutput
  var scriptCode = "console.log('Meow')"
  var question 
  var answer


  const Q1  = () => {
    question = 1
    answer = "Meow Meow\n";
        document.getElementById("assignmentHeading").innerHTML = 'Print "Meow Meow"'
        console.log(question)
  }

  const Q2  = () => {
    question = 2
    answer = "Meow Meow\n";
        document.getElementById("assignmentHeading").innerHTML = 'Print "Meow Meow"'
  }

  const Q3  = () => {
    question = 3
    answer = "Meow Meow\n";
        document.getElementById("assignmentHeading").innerHTML = 'Print "Meow Meow"'
  }

  function onChange(newValue) {
    scriptCode = newValue
  }

  const execute = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const urll = "https://api.jdoodle.com/v1/execute";
    var request = require('request');

    var program = {
        script : scriptCode,
        language: "nodejs",
        versionIndex: "0",
        clientId: "4b48928c0429001606b689de5fe064dc",
        clientSecret:"82b5568ff27e2c4877372112e337250c4bd8b01fdedc986c77869865de032deb"
    };
    request({
        url: proxyurl+urll,
        method: "POST",
        json: program,
        headers: 'Access-Control-Allow-Origin'
    },

    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        scriptOutput = body.output
        var outputArea = document.getElementById("outputControl")
        outputArea.innerHTML = scriptOutput

        switch(question) {
          case 1:
          case 2:
          case 3:
            if (answer === scriptOutput) {
              document.getElementById("resultControl").innerHTML = "Correct!"
            } else {
              document.getElementById("resultControl").innerHTML = "Incorrect. Try again?"
            }
            break;
          default:
            document.getElementById("resultControl").innerHTML = "N/A"
    
        }
    });
    



  };

  return (
    <div style={{background: "", paddingBottom: 356}}>
        <AceEditor 
        mode="javascript" 
        theme="twilight"  
        style={{marginLeft: '34rem', minWidth: 750, maxHeight: 300}}
        value="console.log('Meow')"
        onChange={onChange}
        />

        <Button variant="warning" onClick={execute} style={{marginTop:'0.5rem', marginLeft:'0.5rem'}}>
            Run
        </Button>
        
        <p>Pick an Assignment: </p>
        <Button variant="warning" onClick={Q1} style={{marginTop:'0.5rem', marginLeft:'0.5rem'}}>
            1
        </Button>

        <Button variant="warning" onClick={Q2} style={{marginTop:'0.5rem', marginLeft:'0.5rem'}}>
            2
        </Button>

        <Button variant="warning" onClick={Q3} style={{marginTop:'0.5rem', marginLeft:'0.5rem'}}>
            3
        </Button>

        <h1 id="assignmentHeading">No assignments selected.</h1>
        <Form>
          <Form.Group>
            <Form.Label>Output:</Form.Label>
            <Form.Control id="outputControl" as="textarea" rows={3} readOnly defaultValue={scriptOutput}/>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group>
            <Form.Label>Assigntment Results:</Form.Label>
            <Form.Control id="resultControl" as="textarea" rows={3} readOnly defaultValue={scriptOutput}/>
          </Form.Group>
        </Form>

    </div>
  );
}

export default HookCode;