import React, { useState } from 'react';

export default function TextBox(props) {
  const buttonOnClick = ()=>{
      setText(text.toUpperCase())
  }
  const onChangeHandler = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea class="form-control" id="my box" value={text} onChange={onChangeHandler} rows="6" placeholder='Enter your text here'></textarea>
        </div>
        <button className="btn btn-primary" onClick={buttonOnClick}>Convert to uppercase</button>
    </div>
  )
}
