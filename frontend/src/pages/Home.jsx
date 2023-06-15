import { Link } from "react-router-dom";
import { useState } from "react";
import SwitchButton from "../components/SwitchButton";
import GlobalNavBar from "../components/GlobalNavBar";
import "./Home.scss";

function Home() {
  const [isOn, setIson] = useState(true);

  const handleActive = (isOn) => {
    setIson(!isOn);
  };

  return (
    <>
      <p>je suis dans le comp Home</p>
      <GlobalNavBar />
      <Link to="/">Home</Link>
      <div className={`Light ${isOn ? "Light" : "Dark"}`}>
        <SwitchButton Active={handleActive} />
      </div>
    </>
  );
}

export default Home;
