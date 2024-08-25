import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <button className="button" style={{
      padding: `${props.padding}`,
      fontSize: `${props.fontSize}`,
      borderRadius: `${props.borderRadius}`,
      color:  "var(--color-text-button)",
    }}>
      {props.children}
    </button>
  )
}

export default Button
