import "./CommandeElement.scss";
import { useContext } from "react";
import MiniCards from "./MiniCards";
import MyContext from "./Context";

function CommandeElement({ commandeItem }) {
  const { panier, setPanier } = useContext(MyContext);

  const totalCommandeMultiple = () => {
    if (commandeItem.length > 1) {
      const sousTotaux = commandeItem.map((item) =>
        item.reduce((acc, element) => acc + element.price, 0)
      );

      const total = sousTotaux.reduce((acc, sousTotal) => acc + sousTotal);

      return total;
    }
    return 0;
  };

  const handleClickRecommanderSeul = (e) => {
    if (Array.isArray(commandeItem[0]) === false) {
      const copyPanier = panier;
      const newPanier = copyPanier.concat([commandeItem]);
      setPanier(newPanier);
    } else {
      const elementIndex = e.target.value;

      const copyPanier = panier;
      const newPanier = copyPanier.concat([commandeItem[elementIndex]]);
      setPanier(newPanier);
    }
  };

  const handleClickRecommanderTout = () => {
    const copyPanier = panier;
    const newPanier = copyPanier.concat(commandeItem);
    setPanier(newPanier);
  };

  return Array.isArray(commandeItem[0]) === false ? (
    <article className="commandeArticleUnique">
      {commandeItem.length === 1 ? (
        <section className="sectionCommandeProfil">
          <div className="div-section-minicards">
            <MiniCards dreams={commandeItem[0]} key={commandeItem[0].id} />
          </div>
          <div className="total-commande">
            <p>Total</p>
            <div className="div-commande-price">
              {`${commandeItem[0].price} €`}
            </div>
            <button
              type="button"
              className="buttonRecommanderSimple"
              onClick={handleClickRecommanderSeul}
            >
              Recommander
            </button>
          </div>
        </section>
      ) : (
        <section className="sectionCommandeProfil">
          <div className="div-section-minicards">
            {commandeItem.map((element) => (
              <MiniCards dreams={element} key={element.id} />
            ))}
          </div>
          <div className="total-commande">
            <p>Total</p>
            <div className="div-commande-price">
              {commandeItem.reduce((acc, element) => acc + element.price, 0)} €
            </div>
            <button
              type="button"
              className="buttonRecommanderSimple"
              onClick={handleClickRecommanderSeul}
            >
              Recommander
            </button>
          </div>
        </section>
      )}
    </article>
  ) : (
    <article className="commandeComposee">
      {commandeItem.map((commande, index) =>
        commande.length === 1 ? (
          <section className="sectionCommandeProfil" key={commande[0].id}>
            <div className="div-section-minicards">
              <MiniCards dreams={commande[0]} />
            </div>
            <div className="total-commande">
              <p>Total</p>
              <div className="div-commande-price">
                {`${commande[0].price} €`}
              </div>
              <button
                type="button"
                value={index}
                onClick={handleClickRecommanderSeul}
              >
                Recommander seul
              </button>
            </div>
          </section>
        ) : (
          <section className="sectionCommandeProfil" key={commande[0].id}>
            <div className="div-section-minicards">
              {commande.map((element) => (
                <MiniCards dreams={element} key={element.id} />
              ))}
            </div>
            <div className="total-commande">
              <p>Total</p>
              <div className="div-commande-price">
                {commande.reduce((acc, element) => acc + element.price, 0)} €
              </div>
              <button
                type="button"
                value={index}
                onClick={handleClickRecommanderSeul}
              >
                Recommander seul
              </button>
            </div>
          </section>
        )
      )}
      <section className="recapitulatifCommandeComposee">
        <div className="recapCommandeMultipleDivGauche">
          <p>{`Total : ${totalCommandeMultiple()} €`}</p>
        </div>
        <div>
          <button
            type="button"
            className="buttonRecommanderMultiple"
            onClick={handleClickRecommanderTout}
          >
            Repasser toute la commande
          </button>
        </div>
      </section>
    </article>
  );
}

export default CommandeElement;
