import { useState } from "react";
import "./SwitchButton.scss";

function Switch({ Active }) {
  const [isOn, setIson] = useState(false);

  const handleSwitch = () => {
    setIson(!isOn);
    Active(!isOn);
  };

  return (
    <div className="GlobalSwitch">
      <div className="Mode">
        <h1>Mode</h1>
      </div>
      <div className="Switch">
        <p>Rêve</p>
        <label>
          <input type="checkbox" onClick={handleSwitch} />
          <span />
        </label>
        <p>Cauchemar</p>
      </div>
    </div>
  );
}

export default Switch;
