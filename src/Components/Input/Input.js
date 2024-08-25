import React from 'react'
import './Input.css'
function Input(props) {
  return (
    <input id='input' className={props.className} style={{
        minWidth: `${props.width}`,
        maxWidth: "300px",
        height: "70px",
        outline: "1px solid var(--color-button)",
        background: "none",
        top: `${props.top}`,
        boxShadow: "0px 3px 9px 4px black inset",
        position: `${props.position}`,
        zIndex: "22",
        marginTop: "20px",
        paddingLeft: "25px",
        transition: "all 0.5s",
        cursor: "pointer",
        borderRadius: "15px",
        fontSize: "40px",
        color: "white",
    }} type={props.type} placeholder={props.placeholder} onInput={props.func}/>
  )
}

export default Input
