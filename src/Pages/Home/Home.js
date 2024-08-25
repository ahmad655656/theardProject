import React from 'react'
import { Title, Content, Button} from '../../Components/index'
import './Home.css'
import boyka from '../../imge/boyka.png'



function Home() {
  return (
    <div className='home' style={{
      background: `url(${boyka})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      backgroundSize: "cover",
    }}>
      <span className='after'></span>
      <span className='befor'></span>
      <div className='containerHome'>
      <Title animation={"title 1s 0s ease-in-out 1 alternate"} color="darkblue">Welcome to our website.</Title>
        <Content back={"var(--background-color-main)"} animation={"content 1s 0s ease-in-out 1 alternate"} color="var(--color-text-address)">This website is dedicated to various news, in addition to watching the latest films and series</Content>
      </div>
    </div>
  )
}

export default Home
