import React, { useState, useContext } from "react";
import "./Popup.scss";
import MyContext from "./Context";

function Popup({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, users } = useContext(MyContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSubmit(username, password);
  // };

  const handleSubmitPopup = (event) => {
    event.preventDefault();
    const utilisateur = users.find((user) => user.pseudo === username);
    if (utilisateur === undefined || utilisateur.mdp !== password) {
      alert("wrong password or shit");
      setPassword("");
      setUsername("");
    } else {
      setUser(utilisateur);
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Connexion</h2>
        <form>
          <div className="inputConnection">
            <div>
              <label htmlFor="username">Pseudo:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button type="submit" onClick={handleSubmitPopup}>
            Valider
          </button>
        </form>
        <button type="button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}

export default Popup;
