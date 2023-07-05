import "./Profil.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../components/Context";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profil() {
  const { user } = useContext(MyContext);
  // console.log(user);
  const { isOn } = useContext(MyContext);
  const { image } = user;

  return (
    <>
      <Header />
      <main className="mainProfil">
        <section className="profilMenu">
          {/* <img src={user.image} alt="profil" /> */}
          <img id="photoProfil" src={image} alt="profil" />

          <NavLink
            to="/profil/"
            className={isOn ? "linkProfil" : "linkProfilDark"}
          >
            <h2>Profil</h2>
            <img src="../src/assets/images/Account.png" alt="icone profil" />
          </NavLink>
          <NavLink
            to="/profil/commandesection"
            className={isOn ? "linkProfil" : "linkProfilDark"}
          >
            <h2>Commandes</h2>
            <img src="../src/assets/images/commande.png" alt="icone commande" />
          </NavLink>
          <NavLink
            to="/profil/favorissection"
            className={isOn ? "linkProfil" : "linkProfilDark"}
          >
            <h2>Favoris</h2>
            <img
              src="../src/assets/images/etoile-pleine.png"
              alt="icone favoris"
            />
          </NavLink>
          <NavLink
            to="/profil/demandeparticuliere"
            className={isOn ? "linkProfil" : "linkProfilDark"}
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
      <Footer />
    </>
  );
}

export default Profil;
