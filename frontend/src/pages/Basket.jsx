import ItemsRow from "../components/ItemsRow";
import "./Basket.scss";

function Basket({ dreams }) {
  return (
    <div className="mainBasketSection">
      <div>
        <p>Mon panier</p>
        <div>
          <ItemsRow dreams={dreams} />
        </div>
      </div>
    </div>
  );
}

export default Basket;
