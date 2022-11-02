import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleSwitch = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#2e4d52"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="#c6e7e4"
    }
  }
  return (
    <div >
      <Navbar title="TextUtility" about="About us" mode={mode} toggle={toggleSwitch}></Navbar>
      <div className="container">
      <TextBox heading="Enter the text" mode={mode}/>
      </div>
    </div>
  );
}

export default App;
