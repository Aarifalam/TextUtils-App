import React, { useState } from "react";


export default function TextForm(props) {

    // This for to covert text into uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        // setText("You have clicked on handleUpClick")
        // console.log(text)

        // coonverting into UpperCase
        let newText = text.toUpperCase()
        setText(newText)

        // alert
        props.showAlert("converted to UpperCase!", "success")


        // let arrWords = text.split(" ");
        // let con = arrWords.length
        // if (arrWords[arrWords.length - 1] === "") {
        //     setVal(con - 1)
        // }
        // setVal(con)


    }
    // Whenever we are clicking the button this function has called and then setText set the value of Text or we can sat update the text variable

    // This for to covert text into lowercase
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)


        // let arrWords = text.split(" ");
        // let con = arrWords.length
        // if (arrWords[arrWords.length - 1] === "") {
        //     setVal(con - 1)
        // }
        // setVal(con)


        // alert
        props.showAlert("converted to LowerCase!", "success")


    }

    // this is for to clear all text what you written in paragraph
    const clearText = () => {
        console.log("Lowercase was clicked" + text)
        let newText = ""
        setText(newText)
        console.log(text)


        // this solution is wrong because text is not updadetes for this component
        // let arrWords = text.split(" ");
        // console.log(arrWords)
        // let con = arrWords.length
        // console.log(con)
        // if (arrWords[arrWords.length - 1] === "") {
        //     setVal(con - 1)
        // }
        // setVal(con)
        // solution
        setVal(0)

    }

    // this function is for to Capitalize the text 
    const handleSentenceCase = () => {
        let arrWords = text.split(". ");
        console.log(arrWords)
        let newText = ""
        for (let i = 0; i < arrWords.length; i++) {
            console.log(i)
            if (i === arrWords.length - 1) {
                newText += arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1)
            }
            else {
                newText += arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1) + ". "
            }
        }
        // console.log(newText);    
        setText(newText)

        // alert
        props.showAlert("converted to SentenceCase!", "success")
    }




    // this Function will listen Capitalized Case button
    const handleCapitalizeCase = () => {
        let arrWords = text.split(" ");
        let newText = ""
        for (let i of arrWords) {
            newText += i.charAt(0).toUpperCase() + i.slice(1) + " "
        }
        // console.log(newText);    
        setText(newText)


        // alert
        props.showAlert("converted to CapitalizeCase!", "success")
    }



    // This is for to listen the changes in the input section
    const handleOnChange = (event) => {
        console.log("Onchange")
        setText(event.target.value)



        // let arrWords = text.split(" ");
        // if (arrWords[] === "") {
        //     arrWords.splice(arrWords.length - 1, 1)
        // }
        // console.log(arrWords)
        // let con = arrWords.length
        // if (arrWords[arrWords.length - 1] === " ") {
        //     setVal(con - 1)
        // }
        // setVal(con)



    }
    //when i'm typing in Input then this function calling and setText function is changing the value of text. but i react we don't have allowence to return any value for updation

    // const wordsCount = () => {
    //     let arrWords = text.split(" ");
    //     if (arrWords[arrWords.length - 1] === "") {
    //         setVal(arrWords.length - 1)
    //     }
    //     setVal(arrWords.length)

    // }


    const [text, setText] = useState("")
    // text = "new text"   //wrong way to update text 
    // setText("new text")   // right way to update text using setText function


    // this is for words count 
    const [val, setVal] = useState(0)

    return (
        <div className="container my-3">
            <div className="Container" >
                <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === "dark" ? "#01101f" : "white", color: props.mode === "dark" ? "white" : "black", border: props.mode === "dark" ? "2px solid #dee2e6" : "2px solid black" }} id="myBox" rows="6"></textarea>
                    {/* value={text} will update because of setText and onChange will give us ability to write in Input  */}
                </div>
                <button className="btn btn-success mx-4" onClick={handleSentenceCase} >Sentence case</button>
                <button className="btn btn-success mx-4" onClick={handleUpClick} >UPPER CASE</button>
                <button className="btn btn-success mx-4" onClick={handleLoClick} >lower case</button>
                <button className="btn btn-success mx-4" onClick={handleCapitalizeCase} >Capitalize Case</button>
                <button className="btn btn-success mx-4" onClick={clearText} >ClearText</button>



            </div>
            <div className="Container my-5" style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h2>your Text summary</h2>
                <p>words :- {text.split(" ").length - 1}   and    characters :- {text.length}</p>
                <p>{0.008 * text.split(" ").length - 1} <b>Menutes read </b></p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the text box above to Preview it here."}</p>
            </div>


        </div>
    )
}