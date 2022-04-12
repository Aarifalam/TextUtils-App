import React from "react";

export default function Alert(props) {
    console.log("i am working")

    const capitalize = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <div style={{ height: "50px" }}>
            {props.alert &&
                <div>
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
                    </div>
                </div >}
        </div>
        // for to fix the size of it we are taking it inside div and all we are taking inside {}
    )
}

// props.alert && 
// this happens because all the JSX will be call convertes to javaScript calls 


// *** CLS ***
// cumilated layout sift
// whenever we are changing it gave us alert, but it shift the layout. for to fix this means not to sift the layout we will give it a size 
