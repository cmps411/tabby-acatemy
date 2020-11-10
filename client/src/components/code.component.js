import React from "react";
import {  Button, Form } from "react-bootstrap";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/mode-javascript";

function HookCode() {
  var scriptOutput
  var scriptCode = "console.log('Meow')"

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

        <Form>
          <Form.Group controlId="UserScriptOutput">
            <Form.Label>Output:</Form.Label>
            <Form.Control id="outputControl" as="textarea" rows={3} defaultValue={scriptOutput}/>
          </Form.Group>
        </Form>

    </div>
  );
}

export default HookCode;