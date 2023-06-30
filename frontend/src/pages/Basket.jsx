import { useContext } from "react";
import ItemsRow from "../components/ItemsRow";
import "./Basket.scss";
import MyContext from "../components/Context";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Basket() {
  const { panier } = useContext(MyContext);
  const { count } = useContext(MyContext);

  const sousTotalBasket = (panierRow, count) => {
    return panierRow.reduce((acc, element) => acc + element.price, 0) * count;
  };

  const totalBasket = (panier) => {
    return panier.reduce(
      (acc, panierRow) => acc + sousTotalBasket(panierRow, count),
      0
    );
  };

  return (
    <>
      <Header />
      <div className="basketContainer">
        <div className="divPanier">
          <div className="panierTitle">
            <h1 id="titlePanier">MON PANIER</h1>
          </div>
          <div className="mainBasketSection">
            <div className="scrollItems">
              <div className="cartesPanier">
                {panier.map((panierRow) => (
                  <ItemsRow
                    panier={panier}
                    totalBasket={totalBasket}
                    sousTotalBasket={sousTotalBasket}
                    panierRow={panierRow}
                    key={panierRow}
                  />
                ))}
              </div>
            </div>
            <div className="totalContainer">
              <div className="totalBox">
                <p>Total</p>
                <p>{`${totalBasket(panier)} €`}</p>
              </div>
              <button type="button">
                {" "}
                <p>Valider ma commande</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Basket;
