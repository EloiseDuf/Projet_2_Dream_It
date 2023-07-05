import "./Cards.scss";
import { useState, useContext } from "react";
import MyContext from "./Context";
import etoilePleine from "../assets/images/etoile-pleine.png";
import etoileVide from "../assets/images/etoile-vide.png";
import panierVide from "../assets/images/panier-vide.png";
import panierRempliVert from "../assets/images/panier-rempli-vert.png";
// import panierRempliRouge from "../assets/images/panier-rempli-rouge.png"

function Cards({ dreams }) {
  const { panier, setPanier, user } = useContext(MyContext);

  const [isFavorite, setIsFavorite] = useState();

  const isFavoriteUser = () => {
    if (user && user.favoris) {
      for (let i = 0; i < user.favoris.length; i += 1) {
        if (user.favoris[i].id === dreams.id) {
          return true;
        }
      }
    }
    return false;
  };

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [isEmpty, setIsEmpty] = useState(true);

  const handleClickEmpty = () => {
    let newPanier;

    setIsEmpty(!isEmpty);
    if (isEmpty) {
      const panierItem = [[dreams]];
      newPanier = panier.concat(panierItem);
      setPanier(newPanier);
    } else {
      newPanier = panier.filter((element) => element[0].id !== dreams.id);
      setPanier(newPanier);
    }
  };

  // const fontSize = dreams.name.length > 19 ? '15px' : '17px'

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
                src={
                  isFavoriteUser() || isFavorite === true
                    ? etoilePleine
                    : etoileVide
                }
                className={isFavorite === true ? "isFavorite" : "notFavorite"}
                onClick={handleClickFavorite}
                id="buttonFavorite"
                alt="Etoile favori"
              />
              <img
                src={isEmpty === true ? panierVide : panierRempliVert}
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
