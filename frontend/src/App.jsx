import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <p>coucou</p> */}
    </div>
  );
}

export default App;
