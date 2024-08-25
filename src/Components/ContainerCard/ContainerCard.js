import React from 'react'
import './ContainerCard.css'
export default function ContainerCard({children}) {
  return (
    <div className="containerCard">
      {children}
    </div>
  )
}
