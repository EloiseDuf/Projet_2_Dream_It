import "./Profil.scss";
import { NavLink, Outlet, useParams } from "react-router-dom";

function Profil() {
  const { utilisateur } = useParams();
  const user = JSON.parse(atob(utilisateur));

  return (
    <main className="mainProfil">
      <section className="profilMenu">
        <img src={user.image} alt="profil" />

        <NavLink
          to={`/profil/${utilisateur}`}
          className={({ isActive }) =>
            isActive ? "linkProfil active" : "linkProfil"
          }
        >
          <h2>Profil</h2>
          <img src="../src/assets/images/Account.png" alt="icone profil" />
        </NavLink>
        <NavLink
          to={`/profil/${utilisateur}/commandesection`}
          className={({ isActive }) =>
            isActive ? "linkProfil active" : "linkProfil"
          }
        >
          <h2>Commandes</h2>
          <img src="../src/assets/images/commande.png" alt="icone commande" />
        </NavLink>
        <NavLink
          to={`/profil/${utilisateur}/favorissection`}
          className={({ isActive }) =>
            isActive ? "linkProfil active" : "linkProfil"
          }
        >
          <h2>Favoris</h2>
          <img
            src="../src/assets/images/etoile-pleine.png"
            alt="icone favoris"
          />
        </NavLink>
        <NavLink
          to={`/profil/${utilisateur}/demandeparticuliere`}
          className={({ isActive }) =>
            isActive ? "linkProfil active" : "linkProfil"
          }
        >
          <h2>Demandes particulières</h2>
          <img
            src="../src/assets/images/demande-particuliere.png"
            alt="icone demande particulière"
          />
        </NavLink>
      </section>
      <section className="sectionAffichagePageProfil">
        <Outlet />
      </section>
    </main>
  );
}

export default Profil;
