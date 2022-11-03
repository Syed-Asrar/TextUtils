import React, { useState } from 'react';

export default function TextBox(props) {

  const upperCaseClick = ()=>{
      setText(text.toUpperCase());
      props.showAlert("success","Text converted to uppercase characters!");
  }
  const lowerCaseClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("success","Text converted to lowercase characters!");
  }
  const clearClick =()=>{
    setText("");
    props.showAlert("success","Text Cleared!");
  }
  const onChangeHandler = (event)=>{
    setText(event.target.value);
  }
  const removeSpacesClick = (event)=>{
    let textArea = text.split(/[ ]+/);
    props.showAlert("success","Extra spaces removed!");
    setText(textArea.join(" "));
  }
  const copyClick = ()=>{
    var text = document.getElementById("my box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success","Text Copied to clipboard!");
  }
  const [text, setText] = useState("");
  return (
    <>
    <div>
        <h1 className={`my-3 text-${(props.mode==="light")?"dark":"light"}`}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control bg-${(props.mode==="dark")?"dark":"light"} text-${(props.mode==="light")?"dark":"light"}`} id="my box" value={text} onChange={onChangeHandler} rows="6"></textarea>
        </div>
        <button className={`btn btn-${(props.mode==="light")?"primary":"secondary"}`} onClick={upperCaseClick}>Convert to uppercase</button>
        <button className={`btn btn-${(props.mode==="light")?"primary":"secondary"} mx-3`} onClick={lowerCaseClick}>Convert to Lowercase</button>
        <button className={`btn btn-${(props.mode==="light")?"primary":"secondary"}`} onClick={clearClick}>Clear field</button>
        <button className={`btn btn-${(props.mode==="light")?"primary":"secondary"} mx-3`} onClick={copyClick}>Copy text</button>
        <button className={`btn btn-${(props.mode==="light")?"primary":"secondary"}`} onClick={removeSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: (props.mode==="light")?"black":"white"}}>
      <h2>Summary of the text</h2>
			<p>{(text==="")?0:text.split(" ").length} words, {text.length} characters.</p>
      <p>{0.008 * (text===""?0:text.split(" ").length)} minutes read</p>
      <h4>Preview</h4>
      <p>{text}</p>
		</div>
    </>
  )
}
