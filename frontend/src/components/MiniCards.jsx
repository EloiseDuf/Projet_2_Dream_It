import "./MiniCards.scss";
// import { useState } from "react";

function MiniCards({ dreams }) {
  return (
    <div className="Minicards">
      <div
        className="MiniglobalCard"
        style={{ backgroundImage: `url("${dreams?.image}")` }}
      >
        <div className="Mini-icons">
          <p className="Mini-price">{dreams?.price} €</p>
        </div>

        <div className="Mini-cardContents">
          <h1>{dreams?.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default MiniCards;
