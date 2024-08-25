import React from "react";
import { Button, Title } from "../../Components/index";
import "./Header.css";
import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Mode from "../../Components/Mode/Mode";
function Header() {
  return (
    <NavBar>
      <div className="Left">
        <Title color="white">
          <span className="Logo">HAEDOORA</span>
        </Title>
      </div>
      <div className="Right">
        <Mode />
        <Link to="/">
          <Button padding={"5px 32px"}>Home</Button>
        </Link>
        <div
          style={{ position: "relative",display: "flex", gap: "20px", }}
        >
              <Link to="/news">
                <Button>News</Button>
              </Link>
              <Link to="/films">
                <Button>films</Button>
              </Link>
              <Link to="/series">
                <Button>series</Button>
              </Link>
        </div>
        <Link to="/signin">
          <Button>Sign up</Button>
        </Link>
        <Link to="/contactAs">
        <Button>Contact as</Button>
        </Link>
      </div>
      <FiAlignLeft
        className="listIcon"
        onClick={() => {
          document.querySelector(".Right").classList.add("list");
        }}
        onDoubleClick={() => {
          document.querySelector(".Right").classList.remove("list");
        }}
      ></FiAlignLeft>
    </NavBar>
  );
}

export default Header;
