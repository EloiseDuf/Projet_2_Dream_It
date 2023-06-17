// import { Link } from "react-router-dom";
import { useState } from "react";
import SwitchButton from "../components/SwitchButton";
import "./Home.scss";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

function Home() {
  const imgReve = "src/assets/images/filleQuiDort.png";
  const imgCauchemar = "src/assets/images/imgDemon.jpg";

  const [isOn, setIson] = useState(true);

  const handleActive = (isOn) => {
    setIson(!isOn);

    // on change les variables css en fonction du mode (reve ou cauchemar)
    if (isOn) {
      document.documentElement.style.setProperty("--my-color", "black");
      document.documentElement.style.setProperty(
        "--my-url-background",
        'url("src/assets/images/backgroundRed.svg")'
      );
    } else {
      document.documentElement.style.setProperty("--my-color", "#7661a3");
      document.documentElement.style.setProperty(
        "--my-url-background",
        'url("src/assets/images/backgroundPurple.svg")'
      );
    }
  };

  return (
    <>
      <div className="bodyHomepage">
        <div className="divImage">
          <div className="logoDreamIt">
            <img src="src/assets/images/deam it LOGOLogo.png" alt="logo" />
            {/* <div className={`Light ${isOn ? "Light" : "Dark"}`}> */}
            <div className="imageHome">
              <img src={isOn ? imgReve : imgCauchemar} alt="yoyo monstre" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="divSwitch">
            <SwitchButton Active={handleActive} />
          </div>
        </div>
        {/* <p>je suis dans le comp Home</p> */}

        {/* <Link to="/">Home</Link> */}
      </div>
      <div className="homeGlobal">
        <div className="divFiltersHome">
          <Filters />
        </div>
        <div className="divCardsHome">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Home;
