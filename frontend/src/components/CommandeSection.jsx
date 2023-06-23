import "./CommandeSection.scss";
import { useContext } from "react";
import MiniCards from "./MiniCards";
import MyContext from "./Context";

function CommandeSection() {
  const { user } = useContext(MyContext);

  // destructuration de user
  const { commandes } = user;

  return (
    <main className="mainCommandeSection">
      {commandes.map((commande) =>
        commande.length === 1 ? (
          <section className="sectionCommandeProfil">
            <div className="div-section-minicards">
              <MiniCards dreams={commande[0]} key={commande[0].id} />
            </div>
            <div className="total-commande">
              <p>Total</p>
              <div className="div-commande-price">
                {`${commande[0].price} €`}
              </div>
              <button type="button">Recommander</button>
            </div>
          </section>
        ) : (
          <section className="sectionCommandeProfil">
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
              <button type="button">Recommander</button>
            </div>
          </section>
        )
      )}
    </main>
  );
}

export default CommandeSection;
