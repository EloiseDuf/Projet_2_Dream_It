import React, { useState, useContext, useRef, useEffect } from "react";
import "./NouvelUtilisateur.scss";
import MyContext from "./Context";
// const fs = require('fs');
// const path = require('path');

function NouvelUtilisateur({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [nouvelUser, setNouvelUser] = useState({});
  const { setUser, users, setUsers } = useContext(MyContext);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);
  const { isOn } = useContext(MyContext);

  const handleKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };

  const handleKeyPressEscape = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressEscape);
    return () => {
      document.removeEventListener("keydown", handleKeyPressEscape);
    };
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleChangeFirstname = (event) => {
    setFirstname(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangePostalCode = (event) => {
    setPostalCode(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const addNewUserIntoAPI = () => {
    const listIdUsers = users.map((user) => user.id);
    const validIdUsers = listIdUsers.filter((id) => typeof id === "number");
    const idUser = Math.max(...validIdUsers) + 1;

    // nouvel user à ajouter à users dans mesObjets
    setNouvelUser({
      id: idUser,
      nom: lastname,
      prenom: firstname,
      pseudo: username,
      mdp: password,
      adresse: address,
      ville: city,
      codePostal: postalCode,
      pays: country,
      email,
      tel: telephone,
      age,
      image:
        "https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0",
      favoris: [],
      commandes: [],
    });
  };

  const handleSubmitPopup = (event) => {
    event.preventDefault();

    // on ajoute un utilisateur à la variable users de l'API
    addNewUserIntoAPI();
  };

  // je ne sais pas à quoi ca sert mais c'était dans popup que j'ai copié
  // laissé car pas de bug quand il est là
  // pas testé sans
  if (!isOpen) {
    return null;
  }

  // mise à jour de l'API et rechargement de users quand un nouvel utilisateur est entré
  useEffect(() => {
    if (nouvelUser.id !== undefined) {
      // pour éviter de lancer 4 fois le useEffect
      fetch("http://localhost:4242/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nouvelUser),
      })
        .then((response) => response.json())
        .then(() => {
          return fetch("http://localhost:4242/api/users");
        })
        .then((res) => res.json())
        .then((users) => setUsers(users))
        // .then(console.log(users))
        .catch((error) => console.error(error));
    }
  }, [nouvelUser]);

  // Une fois que users a été mis à jour on met à jour user et on ferme la fenetre
  // la condition sert surtout à éviter une erreur lors du chargement de la popup
  // car users est rechargé et on ne veut pas fermer la page ni définir user avant le click sur le bouton
  useEffect(() => {
    const utilisateur = users.find((user) => user.pseudo === username);
    if (utilisateur === undefined || utilisateur.mdp !== password) {
      setPassword("");
      setUsername("");
    } else {
      setUser(utilisateur);
      onClose();
    }
  }, [users]);

  return (
    <main className="mainNouvelUtilisateur" ref={popupRef}>
      <div className={isOn ? "popup-content" : "popup-content-dark"}>
        <button
          id={isOn ? "closingCross" : "closingCrossDark"}
          type="button"
          onClick={onClose}
        >
          X
        </button>
        <h2>Création de compte</h2>
        <div className="contentDiv">
          <form>
            <div className="inputConnection">
              <div className="nameInput">
                <input
                  placeholder="Nom"
                  type="text"
                  id="lastname"
                  value={lastname}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeLastname}
                />
              </div>
              <div className="firstnameInput">
                <input
                  placeholder="Prénom"
                  type="text"
                  id="firstname"
                  value={firstname}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeFirstname}
                />
              </div>
              <div className="pseudoInput">
                <input
                  placeholder="Pseudo"
                  type="text"
                  id="username"
                  value={username}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="passwordInput">
                <input
                  placeholder="Mot de Passe"
                  type="password"
                  id="password"
                  value={password}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="ageInput">
                <input
                  placeholder="Votre age"
                  type="text"
                  id="age"
                  value={age}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeAge}
                />
              </div>
              <div className="adresseInput">
                <input
                  placeholder="N° et nom de rue"
                  type="text"
                  id="adresse"
                  value={address}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeAddress}
                />
              </div>
              <div className="codePostalInput">
                <input
                  placeholder="Code postal"
                  type="text"
                  id="codePostal"
                  value={postalCode}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangePostalCode}
                />
              </div>
              <div className="cityInput">
                <input
                  placeholder="Ville"
                  type="text"
                  id="ville"
                  value={city}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeCity}
                />
              </div>
              <div className="countryInput">
                <input
                  placeholder="Pays"
                  type="text"
                  id="pays"
                  value={country}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeCountry}
                />
              </div>
              <div className="emailInput">
                <input
                  placeholder="Email"
                  type="text"
                  id="email"
                  value={email}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="telephoneInput">
                <input
                  placeholder="Téléphone"
                  type="text"
                  id="telephone"
                  value={telephone}
                  onKeyDown={handleKeyPressEnter}
                  onChange={handleChangeTelephone}
                />
              </div>
            </div>
          </form>
          <div className="buttonsConnexion">
            <button ref={buttonRef} type="submit" onClick={handleSubmitPopup}>
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NouvelUtilisateur;
