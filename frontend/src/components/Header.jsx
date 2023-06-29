import { useContext } from "react";
import NavBar from "./NavBar";
import MyContext from "./Context";
import imgHeader from "../assets/images/imgHeader.png";
import headerDark from "../assets/images/headerDark.png";
import "./Header.scss";

function Header() {
  const { isOn } = useContext(MyContext);
  return (
    <div className="header">
      <div className="imgHeader">
        <img src={isOn ? imgHeader : headerDark} alt="header" />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
