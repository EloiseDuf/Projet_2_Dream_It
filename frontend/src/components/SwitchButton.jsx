import { useState } from "react";
import "./SwitchButton.scss";

function Switch({ Active }) {
  const [isOn, setIson] = useState(false);

  const handleSwitch = () => {
    setIson(!isOn);
    Active(!isOn);

    // if(isOn) {
    //   homeRef.current.style.setProperty("--my-color", "black");
    // } else {
    //   homeRef.current.style.setProperty("--my-color", "#7661a3");
    // }
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
          <span id="SpanButton" />
        </label>
        <p>Cauchemar</p>
      </div>
    </div>
  );
}

export default Switch;
