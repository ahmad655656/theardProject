import React from 'react'
import { Button, Content, Input, Title } from '../../Components'
import photo_signin from '../../imge/photo_sign.png'
import './Signin.css'
export default function SignIn() {
  return (
    <div className='containersign' style={{
      background: `url(${photo_signin})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "lighten",
    }}>
      <div className='header'>
        <Title color={"var(--color-text-address)"}>
            REGESTER NOW
        </Title>
      </div>
      <div className='body'>
        <Input className={"input one"} width={"600px"} type={"text"} placeholder={"First name"} />
        <Input className={"input two"} width={"600px"} type={"text"} placeholder={"Last name"} />
        <Input className={"input one"} width={"600px"} type={"password"} placeholder={"Please strong password"} />
        <Input className={"input two"} width={"600px"} type={"password"} placeholder={"Confirm the password"} />
        <div className='checkbox'>
        <input type="checkbox" />
        <Content color={"var(--color-text-address)"}>You are not a ropot?</Content>
        </div>
        <Button padding={"20px 30px"} fontSize={"30px"}>Sign in</Button>
      </div>
    </div>
  )
}
