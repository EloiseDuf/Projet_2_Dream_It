import ItemsRow from "../components/ItemsRow";
import "./Basket.scss";

function Basket({ dreams }) {
  return (
    <div className="mainCommandeSection">
      <div>
        <p>Mon panier</p>
        <ItemsRow dreams={dreams} />
      </div>
    </div>
  );
}

export default Basket;
