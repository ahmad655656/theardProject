import React from 'react'
import './Title.css'
function Title(props) {
  return (
    <h2 className='title' style={{
      color: `${props.color}`,
      fontSize: `${props.fontSize}`,
      animation: `${props.animation}`,
    }}>
      {props.children}
    </h2>
  )
}

export default Title
