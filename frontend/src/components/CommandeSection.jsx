import "./CommandeSection.scss";
import { useContext } from "react";
import MyContext from "./Context";
import CommandeElement from "./CommandeElement";

function CommandeSection() {
  const { user } = useContext(MyContext);

  // destructuration de user
  const { commandes } = user;

  return (
    <main className="mainCommandeSection">
      <h2 className="mesCommandes">Mes Commandes</h2>
      {commandes.map((commandeItem) => (
        <CommandeElement
          commandeItem={commandeItem}
          key={commandeItem.length + commandeItem[0].length}
        />
      ))}
    </main>
  );
}

export default CommandeSection;
