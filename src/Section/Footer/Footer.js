import React from 'react'
import { Title } from '../../Components'
import facebook from '../../imge/facebook.png'
import youtube from '../../imge/youtupe.png'
import instagram from '../../imge/instagram.png'
import telegram from '../../imge/tele.png'
import Image from '../../Components/Image/Image'
export default function Footer() {
  return (
    <div className="social">
    <div className="socialIcon">
      <Image height={"50px"} width={"50px"} className={"icon"} src={facebook} />
      <Image className={"icon"} height={"50px"} width={"50px"}  src={youtube} />
      <Image className={"icon"} height={"50px"} width={"50px"}  src={instagram} />
      <Image className={"icon"} height={"50px"} width={"50px"}  src={telegram} />
    </div> 
    <Title color={"#444"}>
      copyright © all rights reserved
    </Title>
  </div>
  )
}
