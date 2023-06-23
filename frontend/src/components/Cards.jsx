import "./Cards.scss";
import { useState } from "react";
import etoilePleine from "../assets/images/etoile-pleine.png";
import etoileVide from "../assets/images/etoile-vide.png";
import panierVide from "../assets/images/panier-plein.png";
import panierRempliVert from "../assets/images/panier-rempli-vert.png";
// import panierRempliRouge from "../assets/images/panier-rempli-rouge.png"

function Cards({ dreams }) {
  const [isFavorite, setIsFavorite] = useState();
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [isEmpty, setIsEmpty] = useState(true);
  const handleClickEmpty = () => {
    setIsEmpty(!isEmpty);
  };

  // const sampleCards = [
  //   {
  //     dreamtype: "Ready to use",
  //     name: "Pirate adventure",
  //     description:
  //       "Join Captain Jack Sparrow on a thrilling pirate adventure filled with treacherous seas, hidden treasures, and epic battles. Can you survive the pirate's life and claim the ultimate prize?",
  //     image: "https://th.bing.com/th/id/OIG.PZr5jFSU3njNRl0zZLLw?pid=ImgGn",
  //     price: 20,
  //     isfavorite: "false",
  //     theme: "Adventure",
  //   },

  //   {
  //     dreamtype: "element",
  //     name: "pirate ship",
  //     category: "vehicle",
  //     image: "https://th.bing.com/th/id/OIG.nGjYDy2LTb4O7V7Z1rc9?pid=ImgGn",
  //     description:
  //       "Sail aboard the legendary Black Pearl on a high-stakes pirate adventure. Navigate treacherous waters, uncover hidden riches, and face formidable foes. Can you conquer the seas and become a true pirate of the Black Pearl?",
  //     price: 30,
  //     isfavorite: "false",
  //     theme: "Adventure",
  //   },
  // ];

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
                src={isFavorite === true ? { etoilePleine } : { etoileVide }}
                className={isFavorite === true ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
                id="buttonFavorite"
                alt="Etoile favori"
              />
              <img
                src={isEmpty === true ? { panierVide } : { panierRempliVert }}
                className={isEmpty === true ? "isEmpty" : "notEmpty"}
                onClick={handleClickEmpty}
                id="buttonCart"
                alt="icone panier"
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
