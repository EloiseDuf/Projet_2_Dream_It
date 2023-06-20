// import { Link } from "react-router-dom";
import { useState } from "react";
import SwitchButton from "../components/SwitchButton";
import "./Home.scss";
// import Filters from "../components/Filters";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

function Home() {
  // const imgReve = "src/assets/images/filleQuiDort.png";
  // const imgCauchemar = "src/assets/images/imgDemon.jpg";

  // const [isOn, setIson] = useState(true);
  const [textCompo, setTextCompo] = useState("composez votre rêve");
  const [textBonheur, setTextBonheur] = useState(
    "Vous ne trouver pas votre bonheur ?"
  );
  const [textSwitch, setTextSwitch] = useState("...ou votre cauchemar");

  const switchTheme = (isOn) => {
    const root = document.documentElement;
    if (isOn) {
      root.style.setProperty(
        "--sectionTitle-background",
        "url(src/assets/images/sectionTitle.png)"
      );
      root.style.setProperty(
        "--top-page-background",
        "url(src/assets/images/topPage.png)"
      );
      root.style.setProperty("--my-color", "#FFFFFF");
      root.style.setProperty("--text-color", "#000000");
    } else {
      root.style.setProperty(
        "--sectionTitle-background",
        "url(src/assets/images/sectionTitle2.png)"
      );
      root.style.setProperty(
        "--top-page-background",
        "url(src/assets/images/topPage2.png)"
      );
      root.style.setProperty("--my-color", "#D8D8D8");
      root.style.setProperty("--text-color", "#FF0000");
    }
  };

  const switchText = (isOn) => {
    if (isOn) {
      setTextCompo("Composez votre rêve");
      setTextBonheur("Vous ne trouver pas votre bonheur ?");
      setTextSwitch("...ou votre cauchemar");
    } else {
      setTextCompo("Composez votre cauchemar");
      setTextBonheur("Vous ne trouver pas votre malheur ?");
      setTextSwitch("...ou votre rêve");
    }
  };

  const handleActive = (isOn) => {
    // setIson(!isOn);
    setTextCompo("Composez votre cauchemar");
    switchTheme(!isOn);
    switchText(!isOn);
  };

  return (
    <>
      <div className="topPage">
        <NavBar />
      </div>
      <div className="divText">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <div className="sectionTitle1">
        <h1>{textCompo}</h1>
        <SwitchButton Active={handleActive} />
        <h1>{textSwitch}</h1>
      </div>
      <div className="makeIt">espace de création à la carte</div>
      <div className="sectionTitle2">
        <h1>En panne d'inspiration ?</h1>
      </div>
      <div className="pickOne">
        Espace sélection rêve tout fait
        <Cards />
      </div>
      <div className="sectionTitle3">
        <h1>{textBonheur}</h1>
      </div>
    </>
  );
}

export default Home;
