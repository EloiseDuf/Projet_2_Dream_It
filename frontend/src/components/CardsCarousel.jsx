import React, { useRef } from "react";
import BigCards from "./BigCards";
import "./CardsCarousel.scss";
import arrow from "../assets/images/arrowRound.png";

function CardsCarousel({ dreams, isOn }) {
  const carouselBoxRef = useRef(null);

  const scroll = (scrollOffset) => {
    carouselBoxRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="carouselMain">
      <img
        onClick={() => scroll(-1245)} // Défiler vers la gauche
        className="arrow1"
        src={arrow}
        alt="arrow"
      />
      <div
        className={isOn ? "carouselBox" : "carouselDark"}
        ref={carouselBoxRef}
      >
        {isOn
          ? dreams
              .filter(
                (dream) =>
                  dream.mode === "dream" && dream.type === "ready-to-use"
              )
              .map((dream) => (
                <BigCards
                  className="cardCarous"
                  dreams={dream}
                  key={dream.id}
                />
              ))
          : dreams
              .filter(
                (dream) =>
                  dream.mode === "nightmare" && dream.type === "ready-to-use"
              )
              .map((dream) => (
                <BigCards
                  className="cardCarous"
                  dreams={dream}
                  key={dream.id}
                />
              ))}
      </div>
      <img
        onClick={() => scroll(1245)} // Défiler vers la droite
        className="arrow2"
        src={arrow}
        alt="arrow"
      />
    </div>
  );
}

export default CardsCarousel;
