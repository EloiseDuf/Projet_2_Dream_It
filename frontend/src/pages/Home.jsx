// import { Link } from "react-router-dom";
import { useState } from "react";
import SwitchButton from "../components/SwitchButton";
import "./Home.scss";
// import Filters from "../components/Filters";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

function Home() {
  const imgTopReve = "src/assets/images/topDoctor.png";
  const imgTopCauchemar = "src/assets/images/topDemon.png";
  // const imgBottomReve = "src/assets/images/bottomGirl.png";
  // const imgBottomCauchemar = "src/assets/images/bottomWitch.png";

  const [isOn, setIson] = useState(true);
  // const [textCompo, setTextCompo] = useState("composez votre rêve");
  // const [textSwitch, setTextSwitch] = useState("...ou votre cauchemar");
  const [textBonheur, setTextBonheur] = useState(
    "Vous ne trouver pas votre bonheur ?"
  );

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
      setTextBonheur("Vous ne trouver pas votre bonheur ?");
      // setTextCompo("Composez votre rêve");
      // setTextSwitch("...ou votre cauchemar");
    } else {
      setTextBonheur("Vous ne trouver pas votre malheur ?");
      // setTextCompo("Composez votre cauchemar");
      // setTextSwitch("...ou votre rêve");
    }
  };

  const handleActive = (isOn) => {
    setIson(!isOn);
    // setTextCompo("Composez votre cauchemar");
    switchTheme(!isOn);
    switchText(!isOn);
  };

  return (
    <>
      <div className="topPage">
        <NavBar />
        <div className={`Reve ${isOn ? "Reve" : "Cauchemar"}`}>
          <img
            src={isOn ? imgTopReve : imgTopCauchemar}
            alt="docteur ou demon"
          />
        </div>
        <div className="topSwitchGlobal">
          <div className="topSwitchText">
            {/* <h1>{textCompo}</h1>
            <h1>{textSwitch}</h1> */}
            <h1>Composez votre rêve</h1>
            <h1>...ou votre cauchemar</h1>
          </div>
          <div className="topSwitchButton">
            <SwitchButton Active={handleActive} />
          </div>
        </div>
      </div>
      <div className="divText">
        <p>
          DreamIt est une startup qui développe des solutions médicales pour
          échapper à la réalité et vivre ses rêve sur demande.{" "}
        </p>
        <p>
          A travers nos pillule, vous trouverez une porte pour échapper à la
          réalité, le temps d'une nuit.
        </p>
        <p>"If you can't do it, at least you can DreamIt"</p>
      </div>
      <div className="sectionTitle1">
        <div className="imgSection1">
          <img src="src/assets/images/homePill.png" alt="pillule" />
        </div>
        <div className="textSection1">
          <p>BEST-SELLER : la pillule magique</p>
          <p>
            Grâce à son principe actif breveté, notre pillule de rêve vous fera
            voyager le temps d'une nuit.
          </p>
          <p>Voie Orale</p>
        </div>
      </div>
      <div className="makeIt">espace de création à la carte</div>
      <div className="sectionTitle2">
        <h1>En panne d'inspiration ?</h1>
        {/* <img src="src/assets/images/bottomGirl.png"/> */}
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
