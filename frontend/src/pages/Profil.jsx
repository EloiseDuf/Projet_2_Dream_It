import "./Profil.scss";
import { NavLink, Outlet } from "react-router-dom";
// import { useState } from "react";
// import ProfilSection from "../components/ProfilSection";
// import CommandeSection from "../components/CommandeSection";
// import FavorisSection from "../components/FavorisSection";
// import DemandeParticuliereSection from "../components/DemandeParticuliereSection";

function Profil() {
  return (
    <main className="mainProfil">
      <section className="profilMenu">
        <img
          src="https://th.bing.com/th/id/OIP.qwbSJ0-sbRTlwQRt6lMDNAHaE8?pid=ImgDet&rs=1"
          alt="profil"
        />

        <NavLink to="/profil" className="linkProfil">
          <h2>Profil</h2>
          <img src="../src/assets/images/Account.png" alt="icone profil" />
        </NavLink>
        <NavLink to="/profil/commandesection" className="linkProfil">
          <h2>Commandes</h2>
          <img src="../src/assets/images/commande.png" alt="icone commande" />
        </NavLink>
        <NavLink to="/profil/favorissection" className="linkProfil">
          <h2>Favoris</h2>
          <img
            src="../src/assets/images/etoile-pleine.png"
            alt="icone favoris"
          />
        </NavLink>
        <NavLink to="/profil/demandeparticuliere" className="linkProfil">
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
