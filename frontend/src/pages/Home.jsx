import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  const imgSrc = "src/assets/images/filleQuiDort.png";

  return (
    <div id="bodyHomepage">
      <div className="divImage">
        <div className="logoDreamIt">
          <img src="src/assets/images/deam it LOGOLogo.png" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="shadow">
          <img src={imgSrc} alt="yoyo monstre" />
        </div>
      </div>
      {/* <p>je suis dans le comp Home</p> */}
      {/* <Link to="/">Home</Link> */}
    </div>
  );
}

export default Home;
