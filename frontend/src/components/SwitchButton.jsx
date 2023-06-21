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
      <label>
        <input type="checkbox" onClick={handleSwitch} />
        <span id="SpanButton" />
      </label>
    </div>
  );
}

export default Switch;
