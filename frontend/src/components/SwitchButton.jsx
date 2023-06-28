import { useContext } from "react";
import MyContext from "./Context";
import "./SwitchButton.scss";

function Switch({ Active }) {
  // function Switch() {
  // const [isOn, setIson] = useState(false);
  const { isOn, setIson } = useContext(MyContext);

  const handleSwitch = () => {
    setIson(!isOn);
    // Active(!isOn);
    Active();
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
