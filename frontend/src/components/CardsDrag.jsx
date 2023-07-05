import "./Cards.scss";
import { useState } from "react";

import etoilePleine from "../assets/images/etoile-pleine.png";
import etoileVide from "../assets/images/etoile-vide.png";

function Cards({ dreams }) {
  const [isFavorite, setIsFavorite] = useState();
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  let fontSize;
  if (dreams.name.length > 33) {
    fontSize = "11px";
  } else if (dreams.name.length > 29) {
    fontSize = "12px";
  } else if (dreams.name.length > 25) {
    fontSize = "13px";
  } else if (dreams.name.length > 24) {
    fontSize = "13px";
  } else if (dreams.name.length > 22) {
    fontSize = "14px";
  } else if (dreams.name.length > 19) {
    fontSize = "15px";
  } else if (dreams.name.length > 15) {
    fontSize = "16px";
  } else if (dreams.name.length > 10) {
    fontSize = "17px";
  } else {
    fontSize = "18px";
  }

  return (
    <div className="cards">
      <div
        className="globalCard"
        style={{ backgroundImage: `url("${dreams?.image}")` }}
      >
        <div className="cardContents">
          <div className="cardTitle">
            <h1 style={{ fontSize, textAlign: "center" }}>{dreams?.name}</h1>
          </div>
          <div className="icons">
            <p className="price">{dreams?.price} €</p>
            <div className="cartFavorite">
              <img
                src={isFavorite === true ? etoilePleine : etoileVide}
                className={isFavorite === true ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
                id="buttonFavorite"
                alt="Etoile favori"
              />
            </div>
          </div>
          <p className="desc">{dreams?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
