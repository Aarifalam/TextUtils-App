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


    }

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

    // This is for to listen the changes in the input section
    const handleOnChange = (event) => {
        console.log("Onchange")
        setText(event.target.value)



        let arrWords = text.split(" ");
        let con = arrWords.length
        if (arrWords[arrWords.length - 1] === "") {
            setVal(con - 1)
        }
        setVal(con)



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
        <>
            <div className="Container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                    {/* value={text} will update because of setText and onChange will give us ability to write in Input  */}
                </div>
                <button className="btn btn-primary mx-2" onClick={clearText} >ClearText</button>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >LowerCase</button>

            </div>
            <div className="Container my-5">
                <h2>your Text summary</h2>
                <p>words :- {val}   and    characters :- {text.length}</p>
                <p>{0.008 * val} <b>Menutes read </b></p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>


        </>
    )
}