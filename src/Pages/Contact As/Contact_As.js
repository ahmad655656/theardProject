import React from "react";
import { Card, Content, Title } from "../../Components";
import Heart from "../../imge/Heart.png";
import "./Contact_As.css";
import Image from "../../Components/Image/Image";

export default function Contact_As() {
  return (
    <div className="contactAs">
      <Image className={"image"} src={Heart} />
      <Content>
      I hope you liked the site. I am very pleased with your visit to my site. Welcome
      </Content>
    </div>
  );
}
