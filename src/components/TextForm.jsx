import React,{useState} from 'react'

function TextForm(props) {
    const [text, setText]=useState('Enter text here');

    const handleUpporCaseText =(e)=>{
        // console.log("uppercase was clicked ", text);
        let newText = text.toUpperCase();
        setText(newText);

        // setText(e.target.value);

        // console.log("convert to uppercase");

    } 
    const handleLowerCaseText =(e)=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange =(e) =>{
      setText(e.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id='myBox' rows={8}onChange={handleOnChange} value={text}></textarea>
            </div>
            <button className='btn btn-primary mx-1'onClick={handleUpporCaseText}>Convert to Uppercase</button>
            <button className='btn btn-primary ms-1'onClick={handleLowerCaseText}>Convert to LowerCase</button>
            
        </div>
        <div className="container">
            <h2>Your text summery</h2>
            <p>{text.split(" ").length} word and {text.length}  character </p>
            <p>{0.008* text.split(' ').length} minute read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm
