import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState();
  const showAlert = (type, message)=>{
    setAlert({
      type : type,
      message : message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }
  const toggleSwitch = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#2e4d52";
      showAlert("success", "Darkmode Enabled!")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="#c6e7e4";
      showAlert("success", "Lightmode Enabled!")
    }
  }
  return (
    <div>
      <Navbar title="TextUtility" about="About us" mode={mode} toggle={toggleSwitch}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container">
      <TextBox heading="Enter the text" mode={mode} showAlert={showAlert}/>
      </div>
      
    </div>
  );
}

export default App;
