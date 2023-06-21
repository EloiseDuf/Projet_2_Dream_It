import React from "react";
// import {link} from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="homeRightDiv">
        <img src="src/assets/images/deam it LOGOLogo.png" alt="Logo" />
        <p>A la carte</p>
        <p>Préfabriqué</p>
      </div>
      <div className="homeLeftDiv">
        <button id="Account" type="button">
          <img src="src/assets/images/Account.png" alt="Account" />
        </button>
        <button id="Cart" type="button">
          <img src="src/assets/images/CartHome.png" alt="Cart" />
          <span className="item-count" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
