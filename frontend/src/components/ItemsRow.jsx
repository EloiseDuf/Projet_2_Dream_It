import MiniCardsBasket from "./MiniCardsBasket";
import "./CommandeSection.scss";

function ItemsRow({ dreams }) {
  return (
    <section className="sectionCommandeProfil">
      <div className="div-section-minicards">
        <MiniCardsBasket dreams={dreams[0]} key={dreams[0].id} />
      </div>
      <div className="details">
        <h1>{dreams[0].name}</h1>
      </div>
      <div className="total-commande">
        <p>Total</p>
        <div className="div-commande-price">{`${dreams[0].price} €`}</div>
        <button type="button">Supprimer</button>
      </div>
    </section>
  );
}

export default ItemsRow;
