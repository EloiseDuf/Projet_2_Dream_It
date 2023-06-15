import { Link } from "react-router-dom";
import { useState } from "react";
import SwitchButton from "../components/SwitchButton";
import NavBar from "../components/NavBar";
import "./Home.scss";

function Home() {
  const [isOn, setIson] = useState(true);

  const handleActive = (isOn) => {
    setIson(!isOn);
  };

  return (
    <>
      <p>je suis dans le comp Home</p>
      <Link to="/">Home</Link>
      <div className={`Light ${isOn ? "Light" : "Dark"}`}>
        <SwitchButton Active={handleActive} />
      </div>
      <div>
        <NavBar />
      </div>
    </>
  );
}

export default Home;
