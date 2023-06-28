import { useContext } from "react";
import ItemsRow from "../components/ItemsRow";
import "./Basket.scss";
import MyContext from "../components/Context";

function Basket() {
  const { user } = useContext(MyContext);

  // destructuration de user
  const { commandes } = user;
  const panier = commandes;

  return (
    <div className="mainBasketSection">
      <div>
        <p>Mon panier</p>
        <div>
          {panier.map((panierRow) => (
            <ItemsRow panierRow={panierRow} key={panierRow} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
