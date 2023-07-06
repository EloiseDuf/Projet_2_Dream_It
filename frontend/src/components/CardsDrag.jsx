import "./Cards.scss";
import { useState, useContext, useEffect } from "react";
import MyContext from "./Context";
import etoilePleine from "../assets/images/etoile-pleine.png";
import etoileVide from "../assets/images/etoile-vide.png";
import Arrow2 from "../assets/images/arrowRound2.png";

function Cards({ dreams }) {
  const { user, setUser } = useContext(MyContext);
  const [isMounted, setIsMounted] = useState(false);

  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const handleArrowClick = () => {
    setIsArrowClicked(!isArrowClicked);
  };

  const defineIsFavoriteUser = () => {
    if (user && user.favoris) {
      for (let i = 0; i < user.favoris.length; i += 1) {
        if (user.favoris[i].id === dreams.id) {
          return true;
        }
      }
    }
    return false;
  };

  const [isFavorite, setIsFavorite] = useState(defineIsFavoriteUser());

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

  // quand l'user change, on réapplique l'état true à isFavorite pour les cartes favoris du user
  useEffect(() => {
    if (user !== null) {
      const newStateFavorite = defineIsFavoriteUser();
      setIsFavorite(newStateFavorite);
    }
  }, [user]);

  // quand on change l'état de isFavorite, on transfere les données à l'API pour modifier l'état des favoris
  useEffect(() => {
    if (isMounted) {
      const newStateFavorite = isFavorite;

      if (user !== null) {
        if (newStateFavorite === true) {
          fetch(`http://localhost:4242/api/users/${user.pseudo}/favoris`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dreams),
          })
            .then((response) => response.json())
            .then(() => {
              fetch(`http://localhost:4242/api/users/${user.pseudo}`)
                .then((res) => res.json())
                .then((res) => setUser(res));
            });
        } else {
          fetch(
            `http://localhost:4242/api/users/${user.pseudo}/favoris/${dreams.id}`,
            {
              method: "DELETE",
            }
          ).then(() => {
            fetch(`http://localhost:4242/api/users/${user.pseudo}`)
              .then((res) => res.json())
              .then((res) => setUser(res));
          });
        }
      }
    } else {
      setIsMounted(true);
    }
  }, [isFavorite]);

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
