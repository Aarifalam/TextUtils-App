import React from "react";

export default function Alert(props) {
    console.log("i am working")

    const capitalize = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
            </div>
        </div >
    )
}

// props.alert && 
// this happens because all the JSX will be call convertes to javaScript calls 