import React,{useState} from 'react'

export default function TextForm(props) {

    const handlerclicked=(event)=>{ 
        setText(event.target.value)
    }
    const buttonupper=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const buttonlower=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
    }
    const clearTextfunc=()=>{
        setText(" ")
    }
    const copyText=()=>{
        let text=document.getElementById("mybox");
        console.log("hi")
        text.select(text);
        navigator.clipboard.writeText(text.value);
    }
    
    const trim=()=>{
        let result = text.split(/[ ]+/);
        setText(result.join(" "));

    }
    const[text,setText]=useState("Enter some text ")
    return (
<>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}} >
            <h1> {props.heading}</h1>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">{props.p}</label>
                <textarea className="form-control" id="myBox" value={text}  onChange={handlerclicked} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary " onClick={buttonupper}>Convert To UpperCase</button>
            <button type="button" className="btn btn-primary mx-3" onClick={buttonlower}>Convert To LowerCase</button>
            <button type="button" className="btn btn-primary " onClick={clearTextfunc}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-primary " onClick={trim}>Remove Extra Spaces</button>
           
        </div>
        <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h5>{text.split(" ").length-1} Words {text.length-1} Characterts</h5>
            <h4>Preview</h4>
            <p>{text}</p>

        </div>
        </>
    )
}