import React, { useState } from "react";
import "./Popup.scss";

function Popup({ isOpen, onClose, onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Valider</button>
        </form>
        <button type="button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}

export default Popup;
