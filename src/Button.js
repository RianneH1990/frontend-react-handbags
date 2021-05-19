import React from 'react';


function Button(props) {
    return (
    <button
        type="button"
        onClick={() =>  console.log(props.title)}
        disabled={props.disabled}
    >
        {props.title}
    </button>
    )}


export default Button;