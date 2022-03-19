import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        // setText("You have clicked on handleUpClick")
        // console.log(text)

        // coonverting into UpperCase
        let newText = text.toUpperCase()
        setText(newText)
    }
    // Whenever we are clicking the button this function has called and then setText set the value of Text or we can sat update the text variable

    const handleOnChange = (event) => {
        console.log("Onchange")
        setText(event.target.value)
    }
    //when i'm typing in Input then this function calling and setText function is changing the value of text.


    const [text, setText] = useState("Enter text here 2")
    // text = "new text"   //wrong way to update text 
    // setText("new text")   // right way to update text using setText function

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                {/* value={text} will update because of setText and onChange will give us ability to write in Input  */}
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >UpperCase</button>
        </div>
    )
}