import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "./Context";
import "./NavBar.scss";
import logoDreamIt from "../assets/images/deam it LOGOLogo.png";
import logoAccount from "../assets/images/Account.png";
import cartHome from "../assets/images/CartHome.png";

function NavBar() {
  const { user, setUser, users } = useContext(MyContext);

  const navigate = useNavigate();

  // destructuration de user
  // const { nom, prenom, age, adresse, codePostal, ville, pays, email, tel } = user;

  let pseudo = "";
  let motDePasse = "";
  const handleClickConnerter = () => {
    if (user === null) {
      pseudo = prompt("Veuillez entrer votre pseudo");
      motDePasse = prompt("Veuillez entrer votre mot de passe");
      const utilisateur = users.find((user) => user.pseudo === pseudo);
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

  return (
    <div className="NavBar">
      <Link to="/" className="homeRightDiv">
        <img src={logoDreamIt} alt="Logo" />
        <p>A la carte</p>
        <p>Préfabriqué</p>
      </Link>
      <div className="homeLeftDiv">
        <button id="Account" type="button">
          <img src={logoAccount} alt="Account" onClick={handleClickConnerter} />
        </button>
        <button id="Cart" type="button">
          <img src={cartHome} alt="Cart" />
          <span className="item-count" />
        </button>
        <div className="menuProfilNavbar">
          {/* Ajouter 2 div
        la première contient la photo et le pseudo de l'utilisateur et n'est affiché que si l'utilisateur est connecté
        la 2eme est un bouton Se connecter / se déconnecter qui change en fonction de l'état de la variable "user"
        si user === null ? Se connecter : Se déconnecter
        user est déjà un usestate partagé avec toutes les pages (je vous expliquerai) */}

          {/* Link à remplacer par des div avec une fonction onClick et un navigate à l'intérieur 
        Si utilisateur connecté --> navigate direct
        Si utilisateur pas connecté : redirection vers POPUP pour se connecter
        utilisation d'un useState pour stocker le lien à suivre après s'être connecté dans la popup
        Si on clique sur se déconnecter on redirige vers la page home */}
          <Link to="/profil" className="linkProfilElementNavbar">
            Mon profil
          </Link>
          <Link
            to="/profil/commandesection"
            className="linkProfilElementNavbar"
          >
            Mes commandes
          </Link>
          <Link to="/profil/favorissection" className="linkProfilElementNavbar">
            Mes favoris
          </Link>
          <Link
            to="/profil/demandeparticuliere"
            className="linkProfilElementNavbar"
          >
            Demandes particulières
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
