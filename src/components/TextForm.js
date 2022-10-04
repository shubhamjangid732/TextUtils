import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUPcase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const handleLOWERcase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    const handleclearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("textarea cleared", "success");
    }
    const handlecopyText = () => {
        let newText = text;
        navigator.clipboard.writeText(newText);
        props.showAlert("text copied to clipboard", "success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "#454545" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "#454545", color: props.mode === "light" ? "#454545" : "white" }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUPcase}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLOWERcase}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear Text</button>
                <button className="btn btn-primary" onClick={handlecopyText}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "#454545" : "white" }}>
                <h1>
                    Your Text Summary
                </h1>
                <p>Words {text.split(" ").length} and Characters {text.length}</p>
                <p>Time To Read {0.008 * text.split(" ").length}</p>
            </div>
        </>
    );
}

