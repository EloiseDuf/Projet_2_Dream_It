import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "./Context";
import "./NavBar.scss";
import logoDreamIt from "../assets/images/deam it LOGOLogo.png";
import logoAccount from "../assets/images/Account.png";
import cartHome from "../assets/images/CartHome.png";

function NavBar() {
  const { user, setUser, users } = useContext(MyContext);
  const [isDivVisible, setIsDivVisible] = useState(false);

  const navigate = useNavigate();

  // destructuration de user
  // const {image, pseudo } = user;

  let usedPseudo = "";
  let motDePasse = "";
  const handleClickLogin = () => {
    if (user === null) {
      usedPseudo = prompt("Veuillez entrer votre usedPseudo");
      motDePasse = prompt("Veuillez entrer votre mot de passe");
      const utilisateur = users.find((user) => user.pseudo === usedPseudo);
      if (utilisateur === undefined) {
        alert("Aucun utilisateur de ce nom existe");
      } else if (utilisateur.mdp === motDePasse) {
        setUser(utilisateur);
        navigate("/profil/");
      }
    } else {
      navigate("/profil/");
    }
  };

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
                <button type="button" onClick={handleClickLogin}>
                  Se Connecter
                </button>
              ) : (
                <button type="button" onClick={handleClickLogout}>
                  Se Deconnecter
                </button>
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
