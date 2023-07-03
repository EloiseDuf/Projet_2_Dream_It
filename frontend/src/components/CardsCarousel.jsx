import React, { useRef } from "react";
import Cards from "./Cards";
import "./CardsCarousel.scss";
import arrow from "../assets/images/arrowRound.png";

function CardsCarousel({ dreams, isOn }) {
  const carouselBoxRef = useRef(null);

  const scroll = (scrollOffset) => {
    carouselBoxRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <img
        onClick={() => scroll(-500)} // Défiler vers la gauche
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
              .filter((dream) => dream.mode === "dream")
              .map((dream) => (
                <Cards className="cardCarous" dreams={dream} key={dream.id} />
              ))
          : dreams
              .filter((dream) => dream.mode === "nightmare")
              .map((dream) => (
                <Cards className="cardCarous" dreams={dream} key={dream.id} />
              ))}
      </div>
      <img
        onClick={() => scroll(500)} // Défiler vers la droite
        className="arrow2"
        src={arrow}
        alt="arrow"
      />
    </>
  );
}

export default CardsCarousel;
