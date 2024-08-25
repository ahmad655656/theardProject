import React from 'react'
import night_mode from '../../imge/night-mode.png'
import moon from '../../imge/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import'./Mode.css'
import Image from '../Image/Image'

export default function Mode() {
const {mode,toggle} = useContext(ThemeContext)

  return (
    <div className="contain" onClick={toggle}>
        <Image className={"img"} src={night_mode} />
         <Image src={moon} className={"img"} />
          <span className="switch"
           style={mode === "light" ? {left: "50px"} : {right: "50px"}} />
        </div>
  )
}