import "./MiniCards.scss";
// import { useState } from "react";

function MiniCardsBasket({ dreams }) {
  return (
    <div className="Minicards">
      <div
        className="MiniglobalCard"
        style={{ backgroundImage: `url("${dreams?.image}")` }}
      />
    </div>
  );
}

export default MiniCardsBasket;
