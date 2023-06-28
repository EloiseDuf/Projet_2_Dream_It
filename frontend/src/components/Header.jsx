import NavBar from "./NavBar";
import imgHeader from "../assets/images/imgHeader.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="imgHeader">
        <img src={imgHeader} alt="header" />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
