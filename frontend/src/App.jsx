import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import MyContext from "./components/Context";
import users from "./assets/Variables";
import Home from "./pages/Home";
import Bundle from "./pages/Bundle";
import ProfilSection from "./components/ProfilSection";
import CommandeSection from "./components/CommandeSection";
import FavorisSection from "./components/FavorisSection";
import DemandeParticuliereSection from "./components/DemandeParticuliereSection";

import "./App.scss";
import Profil from "./pages/Profil";

function App() {
  const [dreams, setDreams] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4242/api/all")
      .then((res) => res.json())
      .then((res) => setDreams(res));
  }, []);
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

  // user sera l'utilisateur de mon site, quand on entre sur le site il est initialisé à null
  // il changera quand on l'utilisateur se connectera
  const [user, setUser] = useState(null);

  // stockage de l'état initial de user, setUser et users via un useMemo
  const valeursFourniesDansMyContextProvider = useMemo(
    () => ({ user, setUser, users }),
    [user, setUser, users]
  );

  return (
    <div className="App">
      <Link to="/profil">Voir profil</Link>
      {/* <MyContext.Provider value={{ user, setUser, users }}> */}
      <MyContext.Provider value={valeursFourniesDansMyContextProvider}>
        <Routes>
          <Route path="/" element={<Home dreams={dreams} />} />
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
          <Route path="/bundle" element={<Bundle dreams={dreams} />} />
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
