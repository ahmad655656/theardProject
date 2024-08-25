import React from 'react'
import { Content, Title } from '../index'
import './Card.css'
import Image from '../Image/Image'
function Card(props){
  return (
    <div style={{ 
      animation: `${props.animation}`,
    }} className="news_card" onDoubleClick={props.details} onClick={props.actions}>
      <div className='mainCard'>
        <span className='title'><Title color="red">{props.title1}</Title></span>
        <span className='title'><Title color="red">{props.title2}</Title></span>
        <Image src={props.src} alt={props.title} />
        <span style={{
          fontSize: "35px",
          letterSpacing: "3px",
          fontWeight: "800",
        }}>{props.content}</span>
        <div className='rate'>
        <Content>{props.popularity}</Content>
        <Content>{props.rate}</Content>
        </div>
        <span className='descSpan'>
        <Content>{props.description}</Content>
        <Content>{props.author}</Content>
        </span>
      </div>
    </div>
  )
}

export default Card
