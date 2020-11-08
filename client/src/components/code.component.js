import React from "react";
import {  Button, Form } from "react-bootstrap";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/mode-javascript";

function HookCode() {
  return (
    <div style={{background: "", paddingBottom: 356}}>
        <AceEditor 
        mode="javascript" 
        theme="twilight"  
        style={{marginLeft: '34rem', minWidth: 750, maxHeight: 300}}
        value="console.log('Meow')"
        />
        <Button variant="warning" style={{marginTop:'0.5rem'}}>
            Save Code
        </Button>
        <Button variant="warning" style={{marginTop:'0.5rem', marginLeft:'0.5rem'}}>
            Run
        </Button>
    </div>
  );
}

export default HookCode;