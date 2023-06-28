import "./Cards.scss";
import { useState } from "react";

import etoilePleine from "../assets/images/etoile-pleine.png";
import etoileVide from "../assets/images/etoile-vide.png";

function Cards({ dreams }) {
  const [isFavorite, setIsFavorite] = useState();
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="cards">
      <div
        className="globalCard"
        style={{ backgroundImage: `url("${dreams?.image}")` }}
      >
        <div className="cardContents">
          <h1>{dreams?.name}</h1>
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
