import { Routes, Route, Link } from "react-router-dom";
// import { useContext } from "react";
import MyContext from "./components/Context";
import Home from "./pages/Home";
import ProfilSection from "./components/ProfilSection";
import CommandeSection from "./components/CommandeSection";
import FavorisSection from "./components/FavorisSection";
import DemandeParticuliereSection from "./components/DemandeParticuliereSection";

import "./App.scss";
import Profil from "./pages/Profil";

const user = {
  nom: "Manson",
  prenom: "Marilyn",
  adresse: "15 rue St Honoré",
  ville: "LA",
  codePostal: "99099",
  pays: "USA",
  email: "marilyn.manson@youpi.us",
  tel: "+32 7 79 85 76 20",
  age: 30,
  image:
    "https://th.bing.com/th/id/OIP.qwbSJ0-sbRTlwQRt6lMDNAHaE8?pid=ImgDet&rs=1",
  favoris: [],
  commandes: [],
};

function App() {
  // récupération de la largeur et la hauteur de la fenêntre du navigateur
  let largeurWindow = window.innerWidth;
  let hauteurWindow = window.innerHeight;

  // fonction renvoyant une largeur d'image en fonction de la taille de la fenetre
  const setWidthImageHome = (largeur, hauteur) => {
    if (largeur > hauteur) {
      return "70vh";
    }
    return "70vw";
  };

  // attribution des largeurs et hauteurs de fenêtre à des variables CSS
  const root = document.documentElement;
  root.style.setProperty(
    "--dimensionImageHome",
    setWidthImageHome(largeurWindow, hauteurWindow)
  );

  // fonction donnant les actions à faire lorsque la fenetre du navigateur est redimensionnée
  const resetWidthImageHome = () => {
    largeurWindow = window.innerWidth;
    hauteurWindow = window.innerHeight;
    root.style.setProperty(
      "--dimensionImageHome",
      setWidthImageHome(largeurWindow, hauteurWindow)
    );
  };

  // on appelle la fonction lorsque la fenêtre est redimensionnée
  window.onresize = resetWidthImageHome;

  // console.log(user);

  return (
    <div className="App">
      <Link to="/profil">Voir profil</Link>
      <MyContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/profil/" element={<Profil />}>
            <Route index element={<ProfilSection />} />
            <Route path="commandesection" element={<CommandeSection />} />
            <Route path="favorissection" element={<FavorisSection />} />
            <Route
              path="demandeparticuliere"
              element={<DemandeParticuliereSection />}
            />
          </Route>
        </Routes>
      </MyContext.Provider>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:utilisateur" element={<Profil />}>
          <Route index element={<ProfilSection />} />
          <Route path="commandesection" element={<CommandeSection />} />
          <Route path="favorissection" element={<FavorisSection />} />
          <Route
            path="demandeparticuliere"
            element={<DemandeParticuliereSection />}
          />
        </Route>
        <Route render={() => <h1>404: page not found</h1>} />
      </Routes> */}
    </div>
  );
}

export default App;
