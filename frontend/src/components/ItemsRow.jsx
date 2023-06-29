import { useState, useEffect } from "react";
import MiniCardsBasket from "./MiniCardsBasket";
import "./ItemsRow.scss";
import poubelle from "../assets/images/poubelle.png";
import MiniCards from "./MiniCards";

function ItemsRow({ panierRow, sousTotalBasket, totalBasket, panier }) {
  const [count, setCount] = useState(1);

  const handleClickLess = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickMore = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    sousTotalBasket(panier, count);
    totalBasket(panier);
  }, [count]);

  // const handleOnDelete = () => {
  //   onDelete(panierRow[0]);
  // };

  return (
    <section className="sectionItemsRow">
      {panierRow.length === 1 ? (
        <div className="cardAndDetails">
          <div className="div-section-minicards">
            <MiniCardsBasket dreams={panierRow[0]} key={panierRow[0].id} />
          </div>
          <div className="details">
            <h1>{panierRow[0].name}</h1>

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
          <p>-</p>
        </button>
        <div>
          <p>{count}</p>
        </div>
        <button className="more" type="button" onClick={handleClickMore}>
          <p>+</p>
        </button>
        <button type="button" className="trash">
          <img src={poubelle} alt="poubelle" />
        </button>
      </div>
      <div className="total-commande">
        <p>Total</p>
        <div className="div-commande-price">{`${sousTotalBasket(
          panierRow,
          count
        )} €`}</div>
      </div>
    </section>
  );
}

export default ItemsRow;
