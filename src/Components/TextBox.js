import React, { useState } from 'react';

export default function TextBox(props) {
  console.log('2',props)
  const upperCaseClick = ()=>{
      setText(text.toUpperCase())
  }
  const lowerCaseClick = ()=>{
    setText(text.toLowerCase())
  }
  const clearClick =()=>{
    setText("");
  }
  const onChangeHandler = (event)=>{
    setText(event.target.value);
  }
  const removeSpacesClick = (event)=>{
    let textArea = text.split(/[ ]+/);
    setText(textArea.join(" "));
  }
  const copyClick = ()=>{
    var text = document.getElementById("my box");
    text.select();
    navigator.clipboard.writeText(text.value);
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
    <div>
			<p className={`my-3 text-${(props.mode==="light")?"dark":"light"}`}>This text contains {(text==="")?0:text.split(" ").length} words.<br/>
        This text contains {text.length} characters.</p>
      <h3 className={`my-3 text-${(props.mode==="light")?"dark":"light"}`}>This text's Context is</h3>
      <p className={`my-3 text-${(props.mode==="light")?"dark":"light"}`}>{text}</p>
		</div>
    </>
  )
}
