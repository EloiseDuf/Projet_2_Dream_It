import { useEffect, useState } from "react";

import "./Bundle.scss";

import Header from "../components/Header";
import FiltersBundle from "../components/FiltersBundle";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Bundle({ dreams }) {
  const [filterDreams, setFilterDreams] = useState([]);
  const [originalDreams, setOriginalDreams] = useState([]);

  useEffect(() => {
    setFilterDreams(dreams);
    setOriginalDreams(dreams);
  }, [dreams]);

  const handleFilter = (theme) => {
    const filtered = originalDreams.filter(
      (themeCards) => themeCards.theme === theme
    );
    setFilterDreams(filtered);
  };

  const handleReset = () => {
    setFilterDreams(originalDreams);
  };

  return (
    <>
      <Header />
      <h1 className="bundleH1">Choisissez parmi nos différents bundle</h1>
      <div className="bundleCardsFilters">
        <FiltersBundle handleFilter={handleFilter} handleReset={handleReset} />
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
    </>
  );
}

export default Bundle;
