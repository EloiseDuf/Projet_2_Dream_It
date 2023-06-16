// import { Link } from "react-router-dom";
import { useState } from "react";
import SwitchButton from "../components/SwitchButton";
// import GlobalNavBar from "../components/GlobalNavBar";
import "./Home.scss";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

function Home() {
  const imgReve = "src/assets/images/filleQuiDort.png";
  const imgCauchemar = "src/assets/images/imgDemon.jpg";

  // const homeRef = useRef(null);
  // const handleClick = () => {
  //   // Modifier les styles de l'élément référencé par homeRef
  //   homeRef.current.style.setProperty("--my-color", "blue");
  // };

  const [isOn, setIson] = useState(true);

  // document.documentElement.style.setProperty("--my-color", "blue");

  const handleActive = (isOn) => {
    setIson(!isOn);
  };

  return (
    <>
      <div className="bodyHomepage">
        <div className="divImage">
          <div className="logoDreamIt">
            <img src="src/assets/images/deam it LOGOLogo.png" alt="logo" />
            <div className={`Light ${isOn ? "Light" : "Dark"}`}>
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
        <Filters />
        <Cards />
      </div>
    </>
  );
}

export default Home;
