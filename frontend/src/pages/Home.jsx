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

  const [isOn, setIson] = useState(true);

  const handleActive = (isOn) => {
    setIson(!isOn);
    switchTheme(!isOn);
    
  };

  const switchTheme = (isOn) => {
    const root = document.documentElement;
    if (isOn) {
      root.style.setProperty("--sectionTitle-background", "url(src/assets/images/sectionTitle.png)");
      root.style.setProperty("--top-page-background", "url(src/assets/images/topPage.png)")
      root.style.setProperty("--my-color", "#FFFFFF")
      root.style.setProperty("--text-color", "#000000")
      
    } else {
      root.style.setProperty("--sectionTitle-background", "url(src/assets/images/sectionTitle2.png)")
      root.style.setProperty("--top-page-background", "url(src/assets/images/topPage2.png)")
      root.style.setProperty("--my-color", "#D8D8D8")
      root.style.setProperty("--text-color", "#FF0000")
    }
  }

  return (
    <>
      
      <div className="topPage">
        <NavBar/>
        </div>
        <div className="divText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="sectionTitle1">
            <h1>Composez votre rêve</h1>
            <SwitchButton Active={handleActive} />
          </div>
          <div  className="makeIt">
            espace de création à la carte
          </div>
          <div  className="sectionTitle2">
            <h1>En panne d'inspiration ?</h1>
          </div>
          <div  className="pickOne">
            Espace sélection rêve tout fait
            <Cards />
          </div>
    </>
  );
}

export default Home;
