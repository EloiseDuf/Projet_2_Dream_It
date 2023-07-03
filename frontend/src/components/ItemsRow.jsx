import { useState, useEffect } from "react";
import MiniCardsBasket from "./MiniCardsBasket";
import "./ItemsRow.scss";
import poubelle from "../assets/images/poubelle.png";
import MiniCards from "./MiniCards";

function ItemsRow({
  panierRow,
  prixElementsPanier,
  setTotalPanier,
  prixElement,
}) {
  const [count, setCount] = useState(1);
  const [sousTotalBasket, setSousTotalBasket] = useState(0);

  const handleClickLess = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickMore = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // on recalcule le sousTotal de l'élément de panier
    const sousTotal = count * prixElement.price;
    setSousTotalBasket(sousTotal);

    // on crée une copie de prixElementPanier dans lequel on modifie le soustotal de l'élément
    // ATTENTION en JS, une copie d'un tableau crée une copie de référence
    // pour faire une copie des valeurs uniquement il faut convertir en JSON puis reconvertir en composant JS (voir ci dessous)
    const newPrixElementsPanier = JSON.parse(
      JSON.stringify(prixElementsPanier)
    );
    newPrixElementsPanier.find(
      (element) => element.id === prixElement.id
    ).price = sousTotal;

    // on recalcule prixTotalPanier en fonction de newPrixElementPanier
    const prixTotalPanier = newPrixElementsPanier.reduce(
      (acc, element) => acc + element.price,
      0
    );

    // puis on définis totalPanier
    setTotalPanier(prixTotalPanier);
  }, [count]);

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
        <div className="div-commande-price">{`${sousTotalBasket} €`}</div>
      </div>
    </section>
  );
}

export default ItemsRow;
