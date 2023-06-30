import { useContext, useEffect } from "react";
import MyContext from "./Context";
import "./SwitchButton.scss";

function Switch() {
  const { isOn, setIson } = useContext(MyContext);

  const handleSwitch = () => {
    setIson(!isOn);
  };

  useEffect(() => {
    // Récupérer la valeur de l'état de la case à cocher depuis le stockage local
    const savedValue = localStorage.getItem("checkboxState");
    if (savedValue) {
      setIson(savedValue === "true");
    }
  }, []); // Effectue cette vérification une seule fois lors du montage du composant

  useEffect(() => {
    // Enregistrer l'état de la case à cocher dans le stockage local à chaque changement
    localStorage.setItem("checkboxState", isOn);
  }, [isOn]);

  return (
    <div className="GlobalSwitch">
      <label>
        <input type="checkbox" checked={!isOn} onChange={handleSwitch} />
        <span id="SpanButton" />
      </label>
    </div>
  );
}

export default Switch;
