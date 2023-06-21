// import { useState } from "react";
import Cards from "./Cards";

function CardsCarousel({ dreams }) {
  return (
    <div className="carousel">
      {dreams.map(
        (dream) =>
          dream.id > 0 && dream.id < 4 && <Cards key={dream.id} dream={dream} />
      )}
    </div>
  );
}

export default CardsCarousel;
