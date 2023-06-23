import { useState } from "react";
import "./FiltersBundle.scss";
import FiltersTab from "../assets/FiltersTab";

function FiltersBundle({ handleFilter, handleReset }) {
  const [filtres, setFiltres] = useState(FiltersTab);
  const handleClickFiltre = (image, theme) => {
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
      handleFilter(theme);
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
      <div className="filtersBundleTitle">
        <p title="Clique sur le bouton pour modifier">
          Sélectionnez un ou plusieurs thèmes
        </p>
      </div>
      <div className="filtersBundleFilters">
        <div
          className="div-filtre-theme"
          style={{ borderBottom: "1px solid white", paddingBottom: "8px" }}
        >
          {filtres.map(
            (filtre) =>
              filtre.id <= 12 && (
                <img
                  className={filtre.classe}
                  onClick={() => handleClickFiltre(filtre.image, filtre.theme)}
                  src={filtre.image}
                  alt={`"filtre" ${filtre.title}`}
                  title={filtre.title}
                  key={filtre.id}
                />
              )
          )}
        </div>
        <div className="reset">
          <button
            id="resetButtonFiltersBundle"
            type="button"
            onClick={() => handleReset()}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default FiltersBundle;
