import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./Context";
import "./NavBar.scss";

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
      <div className="homeRightDiv">
        <img src="src/assets/images/deam it LOGOLogo.png" alt="Logo" />
        <p>A la carte</p>
        <p>Préfabriqué</p>
      </div>
      <div className="homeLeftDiv">
        <button id="Account" type="button">
          <img
            src="src/assets/images/Account.png"
            alt="Account"
            onClick={handleClickConnerter}
          />
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
