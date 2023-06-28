import { useEffect, useState } from "react";

import "./Bundle.scss";

import Header from "../components/Header";
import FiltersBundle from "../components/FiltersBundle";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import FiltersTab from "../assets/FiltersTab";

function Bundle({ dreams }) {
  const [filterDreams, setFilterDreams] = useState([]);
  const [originalDreams, setOriginalDreams] = useState(dreams);
  const [filters, setFilters] = useState(FiltersTab);

  const handleFilter = () => {
    // on commence par réinitialiser filterDreams par la valeur initiale, c'est à dire "dreams" contenant tous les reves
    setFilterDreams(originalDreams);
    // on crée une variable intermédiaire filtered équivalent à un filtre de dreams avec seulement les dreams dont le filtre est actif
    const activeFilters = filters
      .filter((filtre) => filtre.active === true)
      .map((filtre) => filtre.theme);
    // on cherche les filtres actifs et on renvoie le theme à conserver dans filtered
    if (activeFilters.length !== 0) {
      const filtered = originalDreams.filter((dream) =>
        activeFilters.includes(dream.theme)
      );
      setFilterDreams(filtered);
    } else {
      setFilterDreams(originalDreams);
    }
  };

  // const handleReset = () => {
  //   setFilterDreams(originalDreams);
  // };

  useEffect(() => {
    setFilterDreams(dreams);
    setOriginalDreams(dreams);
    handleFilter();
  }, [dreams, filters]);

  // ce second useEffect permet de conserver l'affichage des Cards lorsque la page est rafraichie
  useEffect(() => {
    setFilterDreams(originalDreams);
  }, [originalDreams]);

  return (
    <main>
      <Header />
      <h1 className="bundleH1">Choisissez parmi nos différents bundle</h1>
      <div className="bundleCardsFilters">
        <div className="bundleFilters">
          <FiltersBundle filters={filters} setFilters={setFilters} />
        </div>
        <div className="bundleCards">
          {filterDreams.map(
            (dream) =>
              dream.type === "ready-to-use" && (
                <Cards dreams={dream} key={dream.id} />
              )
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Bundle;
