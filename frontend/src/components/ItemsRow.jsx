import { useState } from "react";
import MiniCardsBasket from "./MiniCardsBasket";
import "./ItemsRow.scss";
import poubelle from "../assets/images/poubelle.png";

function ItemsRow({ dreams }) {
  const [count, setCount] = useState(0);

  const handleClickLess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClickMore = () => {
    setCount(count + 1);
  };

  const sousTotal = (count, dreams) => {
    return count * dreams[0].price;
  };

  return (
    <section className="sectionItemsRow">
      <div className="cardAndDetails">
        <div className="div-section-minicards">
          <MiniCardsBasket dreams={dreams[0]} key={dreams[0].id} />
        </div>
        <div className="details">
          <h1>{dreams[0].name}</h1>
          <p>{dreams[0].price} euros</p>
          <p className="longText">{dreams[0].description}</p>
        </div>
      </div>
      <div className="quantity">
        <button className="less" type="button" onClick={handleClickLess}>
          -
        </button>
        <div>
          <p>{count}</p>
        </div>
        <button className="more" type="button" onClick={handleClickMore}>
          +
        </button>
        <button type="button">
          <img src={poubelle} alt="poubelle" />
        </button>
      </div>
      <div className="total-commande">
        <p>Total</p>
        <div className="div-commande-price">{`${sousTotal(
          count,
          dreams
        )} €`}</div>
      </div>
    </section>
  );
}

export default ItemsRow;
