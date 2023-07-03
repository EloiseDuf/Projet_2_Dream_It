import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import MyContext from "./components/Context";
import users from "./assets/Variables";
import Home from "./pages/Home";
import Bundle from "./pages/Bundle";
import ProfilSection from "./components/ProfilSection";
import CommandeSection from "./components/CommandeSection";
import FavorisSection from "./components/FavorisSection";
import DemandeParticuliereSection from "./components/DemandeParticuliereSection";
import Basket from "./pages/Basket";

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

  // variable panier qui doit pouvoir être modifiée et récupérée dans toutes les pages
  const [panier, setPanier] = useState([]);

  // variable pour le changement de mode reve / cauchemar
  const [isOn, setIson] = useState(true);

  const [count, setCount] = useState(1);

  // variable pour le changement de l'état de favori
  const [isFavorite, setIsFavorite] = useState();

  // stockage de l'état initial de user, setUser et users via un useMemo
  const valeursFourniesDansMyContextProvider = useMemo(
    () => ({
      user,
      setUser,
      users,
      panier,
      setPanier,
      isOn,
      setIson,
      count,
      setCount,
      dreams,
      setDreams,
      isFavorite,
      setIsFavorite,
    }),
    [
      user,
      setUser,
      users,
      panier,
      setPanier,
      isOn,
      setIson,
      count,
      setCount,
      dreams,
      setDreams,
      isFavorite,
      setIsFavorite,
    ]
  );

  return (
    <div className="App">
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
          <Route path="/panier" element={<Basket dreams={dreams} />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
