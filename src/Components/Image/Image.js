import React from 'react'
import './Image.css'
export default function Image(props) {
  return (
   <img className={props.className} src={props.src} alt={props.alt} style={{cursor: "pointer", width: `${props.width}`,height: `${props.height}`, opacity: `${props.opacity}`}} />
  )
}
