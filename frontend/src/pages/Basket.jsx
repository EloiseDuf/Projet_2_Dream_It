import { useContext, useEffect, useState } from "react";
import ItemsRow from "../components/ItemsRow";
import "./Basket.scss";
import MyContext from "../components/Context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoCartes from "../assets/images/logoVisa.png";

function Basket() {
  const { panier, setPanier, isOn, user, setUser } = useContext(MyContext);
  const [prixElementsPanier, setPrixElementsPanier] = useState([]);
  const [totalPanier, setTotalPanier] = useState(0);
  const [prixLivraison, setPrixLivraison] = useState(5);
  const [totalCommande, setTotalCommande] = useState(totalPanier);

  // le panier contient des tableaux, soit de 1 élément, soit de plusieurs éléments
  // on commence par créer un tableau qui récupère le prix total de chaque array
  const prixElementsPanierInitial = panier.map((elementPanier, index) => ({
    id: index,
    price: elementPanier.reduce((acc, element) => element.price + acc, 0),
  }));

  useEffect(() => {
    setPrixElementsPanier(prixElementsPanierInitial);

    // on calcule maintenant le prix total du panier
    const prixTotalPanier = prixElementsPanierInitial.reduce(
      (acc, element) => acc + element.price,
      0
    );

    // puis on définis totalPanier
    setTotalPanier(prixTotalPanier);
  }, []);

  const handleChangePrice = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const price = selectedOption.getAttribute("data-price");

    setPrixLivraison(price);
  };

  const handleClickValiderCommande = () => {
    let bodyContent = [];
    if (panier.length === 1 && panier[0].length === 1) {
      bodyContent.push(panier[0][0]);
    } else if (panier.length === 1 && panier[0].length > 1) {
      const [panier0] = panier;
      // bodyContent = panier[0];
      bodyContent = panier0;
    } else if (panier.length > 1) {
      bodyContent = panier;
    }

    if (panier.length === 0) {
      alert(
        "Veuillez ajouter des éléments au panier avant de passer commande !"
      );
    } else if (user === null) {
      alert("Veuillez vous connecter pour passer commande !");
    } else {
      fetch(`http://dreamitapi.bengi.fr:4242/api/users/${user.pseudo}/commandes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyContent),
      })
        .then((response) => response.json())
        .then(
          fetch(`http://dreamitapi.bengi.fr:4242/api/users/${user.pseudo}`)
            .then((res) => res.json())
            .then((res) => {
              const majUser = res;
              setUser(majUser);
            })
        )
        .then(() => {
          const newPanier = [];
          setPanier(newPanier);
          alert("Votre commande vient d'être validée");
        });
    }
  };

  useEffect(() => {
    setTotalCommande(totalPanier + parseInt(prixLivraison, 10));
  }, [prixLivraison, totalPanier]);

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
                      prixElement={prixElementsPanierInitial[index]}
                      key={prixElementsPanier[index].id}
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
              <p>{`${totalPanier} €`}</p>
            </div>
            <div className="divLivraison">
              <p>LIVRAISON</p>
              <select onChange={handleChangePrice}>
                <option value="" disabled hidden>
                  Sélectionnez une option de livraison
                </option>
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
              <p>{prixLivraison} €</p>
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
            <div className={isOn ? "montantTotal" : "montantTotalDark"}>
              <h2>MONTANT TOTAL</h2>
              <h2 className="montant">{`${totalCommande} €`}</h2>
            </div>
          </div>
          <div id="inputPayement">
            <img src={LogoCartes} alt="logo cartes" />
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
                placeholder="DD/MM/YYYY *"
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
      <button
        id="validerPayer"
        type="button"
        onClick={handleClickValiderCommande}
      >
        {" "}
        <p>VALIDER ET PAYER</p>
      </button>
      <Footer />
    </>
  );
}

export default Basket;
