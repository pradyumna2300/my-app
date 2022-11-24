import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("upper"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    
    }
    const handleLowerClick=()=>{
        //console.log("upper"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleClearClick=()=>{
        //console.log("upper"+text)
        let newText=" ";
        setText(newText)
        props.showAlert("Clear Text","danger");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText]=useState("enter your text2");  
    return (
    <>
    <div>
      <h1>{props.heading}</h1>  
      
      <div className="mb-3">
       <label for="Mybox" class="form-label">Text Area</label>
       <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="3"></textarea><br></br>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button> 
       <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button> 
       <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All </button> 
      </div>
  
      
    </div>
    <div className='container my-3'>
        <h1>Your Summary</h1>
        
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
  }
