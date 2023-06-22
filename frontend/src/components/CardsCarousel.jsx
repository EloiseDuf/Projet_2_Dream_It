// import { useState } from "react";
import { useState } from "react";
import Cards from "./Cards";
import "./CardsCarousel.scss";

function CardsCarousel({ dreams }) {
  const calculerNbCardAffichees = () => {
    const largeurWindow = window.innerWidth;
    const largeurCards = 300;
    return Math.floor(largeurWindow / largeurCards);
  };

  const [cardIndexMin, setCardIndexMin] = useState(0);

  const [cardIndexMax, setCardIndexMax] = useState(calculerNbCardAffichees);

  const [nbCard, setNbCard] = useState(calculerNbCardAffichees);

  const handleClickPreviousCard = () => {
    if (cardIndexMin > nbCard - 1) {
      setCardIndexMin(cardIndexMin - nbCard);
      setCardIndexMax(cardIndexMax - nbCard);
    }
  };

  const handleClickNextCard = () => {
    if (cardIndexMax < dreams.length - (nbCard - 1)) {
      setCardIndexMin(cardIndexMin + nbCard);
      setCardIndexMax(cardIndexMax + nbCard);
    } else {
      setCardIndexMin(dreams.length - (nbCard + 1));
      setCardIndexMax(dreams.length + 1);
    }
    setCardIndexMin(cardIndexMin + nbCard);
    setCardIndexMax(cardIndexMax + nbCard);
  };

  const onResizeNbCard = () => {
    setNbCard(calculerNbCardAffichees);
    setCardIndexMax(cardIndexMin + nbCard);
  };
  window.onresize = onResizeNbCard;

  return (
    <div className="carouselBox">
      <div>
        <button
          type="button"
          className="previousButton"
          onClick={handleClickPreviousCard}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(90deg)" }}
          >
            <defs>
              <radialGradient id="gradient">
                <stop offset="50%" stopColor="blue" />
                <stop offset="60%" stopColor="purple" />
              </radialGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </button>
      </div>
      <div className="mapFlex">
        {dreams.map(
          (dream) =>
            dream.type === "ready-to-use" &&
            dream.id > cardIndexMin &&
            dream.id <= cardIndexMax && <Cards key={dream.id} dreams={dream} />
        )}
      </div>
      <button
        type="button"
        className="nextButton"
        onClick={handleClickNextCard}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(-90deg)" }}
        >
          <defs>
            <radialGradient id="gradient">
              <stop offset="50%" stopColor="blue" />
              <stop offset="60%" stopColor="purple" />
            </radialGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CardsCarousel;
