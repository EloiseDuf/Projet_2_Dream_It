import "./Cards.scss";
import { useState } from "react";

function Cards({ dream }) {
  const [isFavorite, setIsFavorite] = useState();
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [isEmpty, setIsEmpty] = useState(true);
  const handleClickEmpty = () => {
    setIsEmpty(!isEmpty);
  };

  return (
    // <div className="cards">
    <div
      className="globalCard"
      style={{ backgroundImage: `url("${dream?.image}")` }}
    >
      <div className="cardContents">
        <h1>{dream?.name}</h1>
        <div className="icons">
          <p className="price">{dream?.price} €</p>
          <div className="cartFavorite">
            {/* <input
                type="button"
                className={isFavorite === true ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
                id="buttonFavorite"
              /> */}
            <img
              src={
                isFavorite === true
                  ? "./src/assets/images/etoile-pleine.png"
                  : "./src/assets/images/etoile-vide.png"
              }
              className={isFavorite === true ? "isFavorite" : "notFavorite"}
              onClick={handleClickFavorite}
              id="buttonFavorite"
              alt="Etoile favori"
            />
            {/* <input
                type="button"
                className={isEmpty === true ? "isEmpty" : "notEmpty"}
                onClick={handleClickEmpty}
                id="buttonCart"
              /> */}
            <img
              src={
                isEmpty === true
                  ? "./src/assets/images/panier-vide.png"
                  : "./src/assets/images/panier-rempli-vert.png"
              }
              className={isEmpty === true ? "isEmpty" : "notEmpty"}
              onClick={handleClickEmpty}
              id="buttonCart"
              alt="icone panier"
            />
          </div>
        </div>
        {/* <img src={sampleCards[0].image} alt={sampleCards[0].name} /> */}
        <p className="desc">{dream?.description}</p>
      </div>
    </div>
    // </div>
  );
}

export default Cards;
