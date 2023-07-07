import "./MiniCards.scss";
// import { useState } from "react";

function MiniCards({ dreams, column2, setColumn2 }) {
  const handleClickCard = () => {
    const newColumn2 = column2.filter((dream) => dream.id !== dreams.id);
    setColumn2(newColumn2);
  };

  return (
    <button type="button" className="Minicards" onClick={handleClickCard}>
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
    </button>
  );
}

export default MiniCards;
