import React, { useContext, useState } from "react";
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

  // const navigate = useNavigate();

  // destructuration de user
  // const {image, pseudo } = user;

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // let usedPseudo = "";
  // let motDePasse = "";
  // const handleSubmitPopup = (username, password) => {
  //   if (user === null) {
  //     usedPseudo = username;
  //     motDePasse = password;
  //     const utilisateur = users.find((user) => user.pseudo === usedPseudo);
  //     if (utilisateur === undefined || utilisateur.mdp !== motDePasse) {
  //       alert("Mot de passe ou pseudo incorrect");
  //     } else if (utilisateur.mdp === motDePasse) {
  //       setUser(utilisateur);
  //       setIsPopupOpen(false);
  //     } else {
  //       navigate("/profil/");
  //     }
  //   }
  // };

  const handleClickLogout = () => {
    if (user !== null) {
      setUser(null);
    }
  };

  const handleClickNavMenu = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <div className="NavBar">
      <Link to="/" className="homeRightDiv">
        <img src={logoDreamIt} alt="Logo" />
        <p>A la carte</p>
        <p>
          <Link to="/bundle">Préfabriqué</Link>
        </p>
      </Link>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        // onSubmit={handleSubmitPopup}
      />
      <div className="homeLeftDiv">
        <button id="Account" type="button">
          <img src={logoAccount} alt="Account" onClick={handleClickNavMenu} />
        </button>
        <button id="Cart" type="button">
          <img src={cartHome} alt="Cart" />
          <span className="item-count" />
        </button>
      </div>
      <div className="menuProfilNavbar">
        {isDivVisible && (
          <>
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
            {user !== null && (
              <>
                <div className="imageUser">
                  <img src={user.image} alt="user" />
                  <h2>{user.pseudo}</h2>
                </div>

                <Link to="/profil" className="linkProfilElementNavbar">
                  Mon profil
                </Link>
                <Link
                  to="/profil/commandesection"
                  className="linkProfilElementNavbar"
                >
                  Mes commandes
                </Link>
                <Link
                  to="/profil/favorissection"
                  className="linkProfilElementNavbar"
                >
                  Mes favoris
                </Link>
                <Link
                  to="/profil/demandeparticuliere"
                  className="linkProfilElementNavbar"
                >
                  Demandes particulières
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
