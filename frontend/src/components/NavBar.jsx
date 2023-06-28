import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyContext from "./Context";
import "./NavBar.scss";
import logoDreamIt from "../assets/images/deam it LOGOLogo.png";
import logoAccount from "../assets/images/Account.png";
import cartHome from "../assets/images/CartHome.png";
import Popup from "./Popup";

function NavBar() {
  const { user, setUser } = useContext(MyContext);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldChangeBackground = scrollPosition > 100; // Changer l'arrière-plan après un défilement de 100 pixels

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClickLogout = () => {
    if (user !== null) {
      setUser(null);
    }
  };

  const handleClickNavMenu = () => {
    setIsDivVisible(!isDivVisible);
  };

  const handleMouseLeave = () => {
    setIsDivVisible(false);
  };

  return (
    <div className="toutesLesDivs">
      <div className={shouldChangeBackground ? "change-bg" : "NavBar"}>
        <div className="homeRightDiv">
          <Link to="/">
            <img src={logoDreamIt} alt="Logo" />
          </Link>
          <p>A la carte</p>
          <Link to="/bundle">Préfabriqué</Link>
        </div>
        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          // onSubmit={handleSubmitPopup}
        />
        <div className="homeLeftDiv">
          <div className="test">
            <button id={user === null ? "Account" : "userActive"} type="button">
              <img
                src={user === null ? logoAccount : user.image}
                alt="Account"
                onClick={handleClickNavMenu}
              />
            </button>
            <button id={user === null ? "Cart" : "activeUser"} type="button">
              <img src={cartHome} alt="Cart" />
              <span className="item-count" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          user === null
            ? isDivVisible
              ? "menuProfilNavbarSmall"
              : "displayNone"
            : isDivVisible
            ? "menuProfilNavbar"
            : "displayNone"
        }
        onMouseLeave={handleMouseLeave}
      >
        {isDivVisible && (
          <div>
            <div>
              {user !== null && (
                <>
                  <div className="imageUser">
                    {/* <img src={user.image} alt="user" /> */}
                    <h2>{user.pseudo}</h2>
                  </div>
                  <Link to="/profil" className="linkProfilElementNavbar">
                    <p>Profil</p>
                  </Link>
                  <Link
                    to="/profil/commandesection"
                    className="linkProfilElementNavbar"
                  >
                    <p>Mes commandes</p>
                  </Link>
                  <Link
                    to="/profil/favorissection"
                    className="linkProfilElementNavbar"
                  >
                    <p>Mes favoris</p>
                  </Link>
                  <Link
                    to="/profil/demandeparticuliere"
                    className="linkProfilElementNavbar"
                  >
                    <p>Demandes particulières</p>
                  </Link>
                </>
              )}
            </div>
            <div className="seConnecter">
              {user === null ? (
                <button type="button" onClick={handleOpenPopup}>
                  Se Connecter
                </button>
              ) : (
                <Link to="/" className="SeDeconnecter">
                  <button type="button" onClick={handleClickLogout}>
                    Se Deconnecter
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
