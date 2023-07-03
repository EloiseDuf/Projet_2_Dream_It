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
          </div>
        </div>
        <div className="totalContainer">
          <p id="recapTitle">RÉCAPITULATIF DE COMMANDE</p>
          <div className="articlesLivraison">
            <div className="divArticles">
              <p>ARTICLES</p>
              <p>{`${totalBasket(panier)} €`}</p>
            </div>
            <div className="divLivraison">
              <p>LIVRAISON</p>
              <select>
                <option value="standard" data-price="5">
                  Livraison standard - 5€
                </option>
                <option value="express" data-price="10">
                  Livraison express - 10€
                </option>
                <option value="premium" data-price="15">
                  Livraison premium - 15€
                </option>
              </select>
              <p>Prix livraison</p>
            </div>
            <div className="inputPromo">
              {/* <form action="SubmitCodePromo" method="POST"> */}
              <input
                type="text"
                id="codePromo"
                name="promo"
                placeholder="CODE PROMO"
              />
              <button id="ok" type="button">
                OK
              </button>
              {/* </form> */}
            </div>
            <div className="montantTotal">
              <h2>MONTANT TOTAL</h2>
              <h2 className="montant">800 €</h2>
            </div>
          </div>
          <div id="inputPayement">
            <div id="nomNumero">
              <input
                id="nomCarte"
                type="text"
                placeholder="NOM DU TITULAIRE DE LA CARTE *"
                minLength={3}
                required
              />
              <input
                id="numeroCarte"
                type="text"
                placeholder="NUMERO *"
                required
                minLength={16}
                maxLength={16}
              />
            </div>
            <div id="expCvv">
              <input
                id="dateExp"
                type="text"
                placeholder="DATE D'EXPIRATION *"
                required
              />
              <input
                id="cvv"
                type="text"
                placeholder="CVV *"
                required
                inputMode="numeric"
                minLength={3}
                maxLength={3}
              />
            </div>
          </div>
        </div>
      </div>
      <button id="validerPayer" type="button">
        {" "}
        <p>VALIDER ET PAYER</p>
      </button>
      <Footer />
    </>
  );
}

export default Basket;
