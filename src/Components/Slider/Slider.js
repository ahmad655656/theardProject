import React from 'react'

import './Slider.css'
function Slider(props) {
  return (
    <div className="slider">
        {props.children}
    </div>
  )
}

export default Slider
