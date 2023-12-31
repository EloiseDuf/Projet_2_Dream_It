import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Typewriter from "typewriter-effect";
import MyContext from "../components/Context";
import "./Home.scss";
// import Filters from "../components/Filters";
import SwitchButton from "../components/SwitchButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardsCarousel from "../components/CardsCarousel";
import Drag from "../components/Drag";
import Arrow from "../assets/images/Arrow.png";
import logoDreamIt from "../assets/images/deam it LOGOLogo.png";

function Home({ dreams }) {
  // const [dreams, setDreams] = useState([]);
  // useEffect(() => {
  //   fetch("http://dreamitapi.bengi.fr:4242/api/all")
  //     .then((res) => res.json())
  //     .then((res) => setDreams(res));
  // }, []);

  const imgTopReve = "assets/images/topDoctor.png";
  const imgTopCauchemar = "assets/images/topDemon.png";
  const imgBottomReve = "assets/images/bottomGirl.png";
  const imgBottomCauchemar = "assets/images/bottomWitch.png";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, users } = useContext(MyContext);

  const { isOn } = useContext(MyContext);
  const [textCompo, setTextCompo] = useState("Voie orale.");
  const [textSwitch, setTextSwitch] = useState(
    "Attention, ceci n'est pas un médicament. À consommer avec modération"
  );
  const [textBonheur, setTextBonheur] = useState(
    "Vous n'avez pas trouvé votre bonheur ?"
  );

  const switchTheme = () => {
    const root = document.documentElement;
    if (isOn) {
      root.style.setProperty(
        "--sectionTitle-background",
        "url(images/sectionTitle.png)"
      );
      root.style.setProperty(
        "--top-page-background",
        "url(images/topPage.png)"
      );
      root.style.setProperty("--my-color", "#FFFFFF");
      root.style.setProperty("--text-color", "#000000");
    } else {
      root.style.setProperty(
        "--sectionTitle-background",
        "url(images/sectionTitle2.png)"
      );
      root.style.setProperty(
        "--top-page-background",
        "url(images/topPage2.png)"
      );
      root.style.setProperty("--my-color", "#D8D8D8");
      root.style.setProperty("--text-color", "#FF0000");
    }
  };

  // const switchText = (isOn) => {
  const switchText = () => {
    if (isOn) {
      setTextBonheur("Vous n'avez pas trouvé votre bonheur ?");
      setTextCompo("Voie orale.");
      setTextSwitch(
        "Attention: risque d'addiction, à consommer avec modération."
      );
    } else {
      setTextBonheur("Vous n'avez pas trouvé votre malheur ?");
      setTextCompo("Voie anale.");
      setTextSwitch(
        "Attention: risque d'addiction, à consommer sans modération."
      );
    }
  };

  // const handleActive = (isOn) => {
  const handleActive = () => {
    // setIson(!isOn);
    // setTextCompo("Composez votre cauchemar");
    switchTheme();
    switchText();
  };

  useEffect(() => {
    handleActive();
  }, [isOn]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const utilisateur = users.find((user) => user.pseudo === username);
    if (utilisateur === undefined || utilisateur.mdp !== password) {
      alert("wrong Pseudo or Password");
      setPassword("");
      setUsername("");
    } else {
      setUser(utilisateur);
    }
  };

  return (
    <>
      <div className="topPage">
        <NavBar />
        <div className="Reve">
          <img
            src={isOn ? imgTopReve : imgTopCauchemar}
            alt="docteur ou demon"
          />
        </div>
        <div className="topSwitchGlobal">
          <img src={logoDreamIt} alt="logo dreamIt" />
          <div className="topSwitchText">
            <h1>Composez votre</h1>
            <div className="writer">
              <Typewriter
                options={{
                  loop: true,
                  delay: 200,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(" rêve")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(" cauchemar")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </div>
          </div>
          <div className="topSwitchButton">
            <SwitchButton Active={handleActive} />
          </div>
        </div>
      </div>
      <div className="divText">
        <p>
          DreamIt est une startup qui développe des solutions <br />
          pour créer vos <span>propres rêves</span>.
        </p>
        <p>
          Grâce à nos pillules, vous trouverez une porte pour échapper à la
          réalité, <br />d le temps d'une nuit.
        </p>
        <p>"If you can't do it, at least you can DreamIT"</p>
      </div>
      <div className="arrow">
        <span />
        <span />
        <span />
      </div>
      <div className="sectionTitle1">
        <div className="sectionTextImg">
          <div className="textSection1">
            <p>REVERA</p>
            <p>
              Notre produit, au principe actif breveté, vous fera vivre une
              expérience unique.
              <br />
              Préparez-vous au voyage, le temps d'une nuit.
            </p>
            <p>{textCompo}</p>
          </div>
          <div className="imgSection1">
            <img src="assets/images/homePill.png" alt="pillule" />
          </div>
        </div>
        <div className="sectionDisclaimer">
          <p>{textSwitch}</p>
        </div>
      </div>
      <div className="vousNeRevezPas">
        <h1>Non, vous ne rêvez pas !</h1>
        <h2>Composez le vôtre dès maintenant</h2>
        <div className="instructions" id="aLaCarte">
          <h3>Glissez-déposez votre sélection dans le panier</h3>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="makeIt">
        <Drag dreams={dreams} isOn={isOn} />
      </div>
      <div className="arrowDnd">
        <span />
        <span />
        <span />
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
      <div className="displayAll">
        <Link to="/bundle">
          <button
            className={isOn ? "displayAllButton" : "displayAllButtonDark"}
            type="button"
          >
            Tout afficher
          </button>
        </Link>
      </div>
      <div className="pickOne">
        <CardsCarousel dreams={dreams} isOn={isOn} />
      </div>
      <div className="arrow">
        <span />
        <span />
        <span />
      </div>
      <div className="bottomText">
        <h1>{textBonheur}</h1>
      </div>

      <div className="bottomTotal">
        <div className={isOn ? "sectionTitle3" : "sectionTitle3Dark"}>
          <h1>Connectez-vous pour nous transmettre vos idées</h1>
          <div className="formText">
            <div className="Mail">
              <input
                placeholder="Pseudo"
                id="emailInput"
                name="email"
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="Password">
              <input
                placeholder="Mot de Passe"
                id="passwordInput"
                name="password"
                type="text"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div>
            <button
              className="loginButton"
              type="button"
              onClick={handleSubmit}
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
