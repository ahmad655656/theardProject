import React from 'react'
import './NavBar.css'
export default function NavBar({children}) {
  return (
    <div className="Header" id="top">
      {children}
    </div>
  )
}
