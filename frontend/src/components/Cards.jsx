import "./Cards.scss";
import { useState, useContext } from "react";
import MyContext from "./Context";
import etoilePleine from "../assets/images/etoile-pleine.png";
import etoileVide from "../assets/images/etoile-vide.png";
import panierVide from "../assets/images/panier-vide.png";
import panierRempliVert from "../assets/images/panier-rempli-vert.png";
import Arrow2 from "../assets/images/arrowRound2.png";
// import panierRempliRouge from "../assets/images/panier-rempli-rouge.png"

function Cards({ dreams }) {
  const { panier, setPanier, user } = useContext(MyContext);

  const [isFavorite, setIsFavorite] = useState();

  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const handleArrowClick = () => {
    setIsArrowClicked(!isArrowClicked);
  };

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
  const screenWidth = window.innerWidth;

  let fontSize;
  if (dreams.name.length > 33 && screenWidth >= 429) {
    fontSize = "11px";
  } else if (dreams.name.length > 29 && screenWidth >= 429) {
    fontSize = "11px";
  } else if (dreams.name.length > 25 && screenWidth >= 429) {
    fontSize = "13px";
  } else if (dreams.name.length > 24 && screenWidth >= 429) {
    fontSize = "14px";
  } else if (dreams.name.length > 23 && screenWidth >= 429) {
    fontSize = "14px";
  } else if (dreams.name.length > 22 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 21 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 20 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 19 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 18 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 17 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 16 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 15 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 14 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 13 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 12 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 11 && screenWidth >= 429) {
    fontSize = "15px";
  } else if (dreams.name.length > 8 && screenWidth >= 429) {
    fontSize = "15px";
  }

  if (dreams.name.length > 33 && screenWidth <= 428) {
    fontSize = "8px";
  } else if (dreams.name.length > 29 && screenWidth <= 428) {
    fontSize = "9px";
  } else if (dreams.name.length > 25 && screenWidth <= 428) {
    fontSize = "10px";
  } else if (dreams.name.length > 24 && screenWidth <= 428) {
    fontSize = "10px";
  } else if (dreams.name.length > 23 && screenWidth <= 428) {
    fontSize = "10px";
  } else if (dreams.name.length > 22 && screenWidth <= 428) {
    fontSize = "11px";
  } else if (dreams.name.length > 21 && screenWidth <= 428) {
    fontSize = "11px";
  } else if (dreams.name.length > 20 && screenWidth <= 428) {
    fontSize = "11px";
  } else if (dreams.name.length > 19 && screenWidth <= 428) {
    fontSize = "11px";
  } else if (dreams.name.length > 18 && screenWidth <= 428) {
    fontSize = "11px";
  } else if (dreams.name.length > 17 && screenWidth <= 428) {
    fontSize = "12px";
  } else if (dreams.name.length > 16 && screenWidth <= 428) {
    fontSize = "13px";
  } else if (dreams.name.length > 15 && screenWidth <= 428) {
    fontSize = "14px";
  } else if (dreams.name.length > 14 && screenWidth <= 428) {
    fontSize = "15px";
  } else if (dreams.name.length > 13 && screenWidth <= 428) {
    fontSize = "16px";
  } else if (dreams.name.length > 12 && screenWidth <= 428) {
    fontSize = "17px";
  } else if (dreams.name.length > 11 && screenWidth <= 428) {
    fontSize = "15px";
  } else if (dreams.name.length > 8 && screenWidth <= 428) {
    fontSize = "15px";
  }

  return (
    <div className="cards">
      <div
        className={isArrowClicked ? "globalCardScrolled" : "globalCard"}
        style={{ backgroundImage: `url("${dreams?.image}")` }}
      >
        <div className="cardContents">
          <div className="cardTitle">
            <h1 style={{ fontSize, textAlign: "center" }}>{dreams?.name}</h1>
          </div>
          <div className="icons">
            <p className="price">{dreams?.price} €</p>
            <img
              id="arrowCard"
              src={Arrow2}
              alt="arrow"
              onClick={handleArrowClick}
            />
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
