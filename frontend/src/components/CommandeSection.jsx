import "./CommandeSection.scss";
import { useContext, useEffect } from "react";
import MyContext from "./Context";
import CommandeElement from "./CommandeElement";

function CommandeSection() {
  const { user, setUser } = useContext(MyContext);

  // destructuration de user
  const { commandes } = user;

  useEffect(() => {
    fetch(`http://localhost:4242/api/users/${user.pseudo}`)
      .then((res) => res.json())
      .then((res) => {
        const majUser = res;
        setUser(majUser);
      });
  }, []);

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
