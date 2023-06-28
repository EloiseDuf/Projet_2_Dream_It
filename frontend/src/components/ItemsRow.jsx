import { useState } from "react";
import MiniCardsBasket from "./MiniCardsBasket";
import "./ItemsRow.scss";
import poubelle from "../assets/images/poubelle.png";
import MiniCards from "./MiniCards";

function ItemsRow({ panierRow }) {
  const [count, setCount] = useState(1);

  const handleClickLess = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickMore = () => {
    setCount(count + 1);
  };

  // const handleOnDelete = () => {
  //   onDelete(panierRow[0]);
  // };

  const sousTotal = (panierRow) => {
    return panierRow.reduce((acc, element) => acc + element.price, 0) * count;
  };

  return (
    <section className="sectionItemsRow">
      {panierRow.length === 1 ? (
        <div className="cardAndDetails">
          <div className="div-section-minicards">
            <MiniCardsBasket dreams={panierRow[0]} key={panierRow[0].id} />
          </div>
          <div className="details">
            <h1>{panierRow[0].name}</h1>
            <p>{panierRow[0].price} euros</p>
            <p className="longText">{panierRow[0].description}</p>
          </div>
        </div>
      ) : (
        <div className="cardAndDetails custom">
          <div className="details">
            <h1>Le rêve de vos rêves</h1>
          </div>
          <div className="div-section-minicards">
            {panierRow.map((element) => (
              <MiniCards dreams={element} key={element.id} />
            ))}
          </div>
        </div>
      )}
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
        <div className="div-commande-price">{`${sousTotal(panierRow)} €`}</div>
      </div>
    </section>
  );
}

export default ItemsRow;
