import React, { useState, useContext, useRef, useEffect } from "react";
import "./Popup.scss";
import MyContext from "./Context";

function Popup({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, users, dreams, setIsFavorite } = useContext(MyContext);
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

  const handleSubmitPopup = (event) => {
    event.preventDefault();
    const utilisateur = users.find((user) => user.pseudo === username);
    if (utilisateur === undefined || utilisateur.mdp !== password) {
      alert("wrong Pseudo or Password");
      setPassword("");
      setUsername("");
    } else {
      setUser(utilisateur);
      onClose();
    } &&

    if (users.favoris.map((e) => e.all[1].id === dreams[1].id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup" ref={popupRef}>
      <div className={isOn ? "popup-content" : "popup-content-dark"}>
        <button
          id={isOn ? "closingCross" : "closingCrossDark"}
          type="button"
          onClick={onClose}
        >
          X
        </button>
        <h2>Connexion</h2>
        <div className="contentDiv">
          <form>
            <div className="inputConnection">
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
            </div>
          </form>
          <div className="buttonsConnexion">
            <button ref={buttonRef} type="submit" onClick={handleSubmitPopup}>
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
