import "./Cards.scss";
import { useState } from "react";

function Cards() {
  const [isFavorite, setIsFavorite] = useState();
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [isEmpty, setIsEmpty] = useState();
  const handleClickEmpty = () => {
    setIsEmpty(!isEmpty);
  };

  const sampleCards = [
    {
      dreamtype: "Ready to use",
      name: "Pirate adventure",
      description:
        "Join Captain Jack Sparrow on a thrilling pirate adventure filled with treacherous seas, hidden treasures, and epic battles. Can you survive the pirate's life and claim the ultimate prize?",
      image: "https://th.bing.com/th/id/OIG.PZr5jFSU3njNRl0zZLLw?pid=ImgGn",
      price: 20,
      isfavorite: "false",
      theme: "Adventure",
    },

    {
      dreamtype: "element",
      name: "pirate ship",
      category: "vehicle",
      image: "https://th.bing.com/th/id/OIG.nGjYDy2LTb4O7V7Z1rc9?pid=ImgGn",
      description:
        "Sail aboard the legendary Black Pearl on a high-stakes pirate adventure. Navigate treacherous waters, uncover hidden riches, and face formidable foes. Can you conquer the seas and become a true pirate of the Black Pearl?",
      price: 30,
      isfavorite: "false",
      theme: "Adventure",
    },
  ];

  return (
    <div className="cards">
      <div className="globalCard">
        <div className="cardContents">
          <h1>{sampleCards[0].name}</h1>
          <div className="icons">
            <p className="price">{sampleCards[0].price} €</p>
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
                    : "./src/assets/images/panier-plein.png"
                }
                className={isEmpty === true ? "isEmpty" : "notEmpty"}
                onClick={handleClickEmpty}
                id="buttonCart"
                alt="icone panier"
              />
            </div>
          </div>
          {/* <img src={sampleCards[0].image} alt={sampleCards[0].name} /> */}
          <p className="desc">{sampleCards[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
