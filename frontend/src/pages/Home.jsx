// import { Link } from "react-router-dom";
import { useState } from "react";

import "./Home.scss";
// import Filters from "../components/Filters";
import SwitchButton from "../components/SwitchButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardsCarousel from "../components/CardsCarousel";
import Drag from "../components/Drag";

function Home({ dreams }) {
  // const [dreams, setDreams] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4242/api/all")
  //     .then((res) => res.json())
  //     .then((res) => setDreams(res));
  // }, []);

  const imgTopReve = "src/assets/images/topDoctor.png";
  const imgTopCauchemar = "src/assets/images/topDemon.png";
  const imgBottomReve = "src/assets/images/bottomGirl.png";
  const imgBottomCauchemar = "src/assets/images/bottomWitch.png";

  const [isOn, setIson] = useState(true);
  const [textCompo, setTextCompo] = useState("Voie orale.");
  const [textSwitch, setTextSwitch] = useState(
    "Attention, ceci n'est pas un médicament. À consommer avec modération"
  );
  const [textBonheur, setTextBonheur] = useState(
    "Vous n'avez pas trouvé votre bonheur ?"
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
      setTextBonheur("Vous n'avez pas trouvé votre bonheur ?");
      setTextCompo("Voie orale.");
      setTextSwitch(
        "Attention, ceci n'est pas un médicament. À consommer avec modération."
      );
    } else {
      setTextBonheur("Vous n'avez pas trouvé votre malheur ?");
      setTextCompo("Voie anale.");
      setTextSwitch("Attention, saignements rectaux fortement envisageable");
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
        <p>"If you can't do it, at least you can DreamIT"</p>
      </div>
      <div className="sectionTitle1">
        <div className="sectionTextImg">
          <div className="textSection1">
            <p>BEST-SELLER : la pillule magique</p>
            <p>
              Grâce à son principe actif breveté, notre pillule de rêve vous
              fera voyager le temps d'une nuit.
            </p>
            <p>{textCompo}</p>
          </div>
          <div className="imgSection1">
            <img src="src/assets/images/homePill.png" alt="pillule" />
          </div>
        </div>
        <div className="sectionDisclaimer">
          <p>{textSwitch}</p>
        </div>
      </div>
      <div className="makeIt">
        espace de création à la carte
        <Drag dreams={dreams} />
      </div>
      <div className="sectionTitle2">
        <div className="textSection2">
          <h1>En panne d'inspiration ?</h1>
        </div>
        <div className={`Girl ${isOn ? "Girl" : "Sorcière"}`}>
          <img
            src={isOn ? imgBottomReve : imgBottomCauchemar}
            alt="Fille ou Sorcière"
          />
        </div>
      </div>
      <div className="pickOne">
        <CardsCarousel dreams={dreams} isOn={isOn} />
      </div>
      <div className="bottomText">
        <h1>{textBonheur}</h1>
      </div>
      <div className="bottomTotal">
        <div className="sectionTitle3">
          <h1>Connectez-vous pour nous transmettre vos idées</h1>
          <div className="formText">
            <div className="Mail">
              <label htmlFor="emailInput">Email</label>
              <input
                id="emailInput"
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="Password">
              <label htmlFor="passwordInput">Mot de passe</label>
              <input
                id="passwordInput"
                name="password"
                type="text"
                placeholder="Mot de passe"
              />
            </div>
          </div>
          <button className="loginButton" type="button">
            Se connecter
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
