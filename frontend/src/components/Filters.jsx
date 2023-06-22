import { useState } from "react";
import "./Filters.scss";
import FiltersTab from "../assets/FiltersTab";

function Filters() {
  const [typeReve, setTypeReve] = useState("Scénario");

  const [filtres, setFiltres] = useState(FiltersTab);

  const handleClickTypeReve = () => {
    if (typeReve === "Scénario") {
      setTypeReve("A la carte");
    } else {
      setTypeReve("Scénario");
    }
  };

  const handleClickFiltre = (image) => {
    const ancienneClasse = filtres.find(
      (filtre) => filtre.image === image
    ).classe;

    if (ancienneClasse === "image-filter") {
      setFiltres((ancienEtat) =>
        ancienEtat.map((filtre) =>
          filtre.image === image
            ? { ...filtre, classe: "image-filter filtreActif" }
            : filtre
        )
      );
    } else {
      setFiltres((ancienEtat) =>
        ancienEtat.map((filtre) =>
          filtre.image === image
            ? { ...filtre, classe: "image-filter" }
            : filtre
        )
      );
    }
  };

  return (
    <section className="section-filters">
      <div className="div-choixTypeReve">
        <p title="Clique sur le bouton pour modifier">Type de rêve</p>
        <button
          className="button-scenario-alacarte"
          onClick={handleClickTypeReve}
          type="button"
        >
          {typeReve}
        </button>
      </div>
      <div className="filters">
        <div
          className="div-filtre-theme"
          style={
            typeReve === "A la carte"
              ? { borderBottom: "1px solid white", paddingBottom: "8px" }
              : { borderBottom: "none" }
          }
        >
          {filtres.map(
            (filtre) =>
              filtre.id <= 12 && (
                <img
                  className={filtre.classe}
                  onClick={() => handleClickFiltre(filtre.image)}
                  src={filtre.image}
                  alt={`filtre ${filtre.title}`}
                  title={filtre.title}
                  key={filtre.id}
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                />
              )
          )}
        </div>
        {typeReve === "A la carte" && (
          <div className="div-filtre-aLaCarte">
            {filtres.map(
              (filtre) =>
                filtre.id > 12 && (
                  <img
                    className={filtre.classe}
                    onClick={() => handleClickFiltre(filtre.image)}
                    src={filtre.image}
                    alt={`filtre ${filtre.title}`}
                    title={filtre.title}
                    key={filtre.id}
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                  />
                )
            )}
          </div>
        )}
      </div>
      <div className="filter-barre-recherche">
        <input type="text" name="researchBar" placeholder="Recherche..." />
        <img
          src="https://img.icons8.com/?size=1x&id=6ZM3xH1Ulu29&format=png"
          alt="Recherche"
        />
      </div>
    </section>
  );
}

export default Filters;
