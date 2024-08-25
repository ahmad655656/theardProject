import React from 'react'
import './Content.css'
function Content(props) {
  return (
    <div className='content' style={{
        color: `${props.color}`,
        backgroundColor: `${props.back}`,
        animation: `${props.animation}`,
    }}>
      {props.children}
    </div>
  )
}

export default Content
