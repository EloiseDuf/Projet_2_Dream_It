import "./FiltersBundle.scss";

function FiltersBundle({ filters, setFilters }) {
  const handleClickFiltre = (image) => {
    const ancienneClasse = filters.find(
      (filtre) => filtre.image === image
    ).classe;
    if (ancienneClasse === "image-filter") {
      setFilters((ancienEtat) =>
        ancienEtat.map((filtre) =>
          filtre.image === image
            ? { ...filtre, classe: "image-filter filtreActif", active: true }
            : filtre
        )
      );
    } else {
      setFilters((ancienEtat) =>
        ancienEtat.map((filter) =>
          filter.image === image
            ? { ...filter, classe: "image-filter", active: false }
            : filter
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
          {filters.map(
            (filter) =>
              filter.id <= 12 && (
                <img
                  className={filter.classe}
                  onClick={() => handleClickFiltre(filter.image, filter.theme)}
                  src={filter.image}
                  alt={`"filtre" ${filter.title}`}
                  title={filter.title}
                  key={filter.id}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default FiltersBundle;