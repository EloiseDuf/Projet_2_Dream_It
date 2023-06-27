import NavBar from "./NavBar";
import imgHeader from "../assets/images/imgHeader.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <img src={imgHeader} alt="header" />
      <NavBar />
    </div>
  );
}

export default Header;