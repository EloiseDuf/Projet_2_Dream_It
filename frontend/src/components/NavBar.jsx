import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyContext from "./Context";
import "./NavBar.scss";
import logoDreamIt from "../assets/images/deam it LOGOLogo.png";
import logoAccount from "../assets/images/Account.png";
import Cart from "../assets/images/panier-vide.png";
import Popup from "./Popup";
import NouvelUtilisateur from "./NouvelUtilisateur";

function NavBar() {
  const { user, setUser } = useContext(MyContext);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [possessionCompte, setPossessionCompte] = useState(true);
  const { isOn } = useContext(MyContext);

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

  const shouldChangeBackground = scrollPosition > 80; // Changer l'arrière-plan après un défilement de 100 pixels

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPossessionCompte(true);
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

  const handleClickScroll = () => {
    const homeElement = document.getElementById("aLaCarte");
    homeElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="toutesLesDivs">
      <div className={shouldChangeBackground ? "change-bg" : "NavBar"}>
        <div className="homeRightDiv">
          <Link to="/">
            <img src={logoDreamIt} alt="Logo" />
          </Link>
          <button
            type="button"
            className="aLaCarte"
            onClick={handleClickScroll}
          >
            A la carte
          </button>
          <Link className="prefabrique" to="/bundle">
            Préfabriqué
          </Link>
        </div>
        {possessionCompte === true ? (
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            setPossessionCompte={setPossessionCompte}
            // onSubmit={handleSubmitPopup}
          />
        ) : (
          <NouvelUtilisateur
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            // setPossessionCompte={setPossessionCompte}
          />
        )}
        <div className="homeLeftDiv">
          <div className="test">
            <button id={user === null ? "Account" : "userActive"} type="button">
              <img
                src={user === null ? logoAccount : user.image}
                alt="Account"
                onClick={handleClickNavMenu}
              />
            </button>
            <Link to="/panier">
              <button id={user === null ? "Cart" : "activeUser"} type="button">
                <img src={Cart} alt="Cart" />
                <span className="item-count" />
              </button>
            </Link>
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
                <button
                  className={isOn ? "reve" : "cauchemar"}
                  type="button"
                  onClick={handleOpenPopup}
                >
                  Se Connecter
                </button>
              ) : (
                <Link to="/" className="SeDeconnecter">
                  <button
                    type="button"
                    className={isOn ? "reve" : "cauchemar"}
                    onClick={handleClickLogout}
                  >
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
