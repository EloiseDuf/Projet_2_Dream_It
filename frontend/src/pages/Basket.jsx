import { useContext, useEffect, useState } from "react";
import ItemsRow from "../components/ItemsRow";
import "./Basket.scss";
import MyContext from "../components/Context";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Basket() {
  const { panier } = useContext(MyContext);
  const [prixElementsPanier, setPrixElementsPanier] = useState([]);
  // const { count } = useContext(MyContext);

  const [totalPanier, setTotalPanier] = useState(0);

  useEffect(() => {
    // le panier contient des tableaux, soit de 1 élément, soit de plusieurs éléments
    // on commence par créer un tableau qui récupère le prix total de chaque array
    const prixElementsPanierInitial = panier.map((elementPanier, index) => ({
      id: index,
      price: elementPanier.reduce((acc, element) => element.price + acc, 0),
    }));
    setPrixElementsPanier(prixElementsPanierInitial);

    // on calcule maintenant le prix total du panier
    const prixTotalPanier = prixElementsPanierInitial.reduce(
      (acc, element) => acc + element.price,
      0
    );

    // puis on définis totalPanier
    setTotalPanier(prixTotalPanier);
  }, []);

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
                {prixElementsPanier.length > 0 &&
                  panier.map((panierRow, index) => (
                    <ItemsRow
                      prixElementsPanier={prixElementsPanier}
                      setTotalPanier={setTotalPanier}
                      panierRow={panierRow}
                      prixElement={prixElementsPanier[index]}
                      key={prixElementsPanier[index]}
                    />
                  ))}
              </div>
            </div>
            <div className="totalContainer">
              <div className="totalBox">
                <p>Total</p>
                <p>{`${totalPanier} €`}</p>
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
