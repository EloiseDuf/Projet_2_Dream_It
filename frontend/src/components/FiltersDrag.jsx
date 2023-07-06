import SwitchButton from "./SwitchButton";
import "./FiltersDrag.scss";

function FiltersDrag({ filters, setFilters, FiltersTab }) {
  // cette version de handleClickFiltre permet de sélectionner plusieurs éléments à la fois, la version d'en dessous (celle active) ne permet de n'en sélectionenr qu'un
  // const handleClickFiltre = (image) => {
  //   const ancienneClasse = filters.find(
  //     (filtre) => filtre.image === image
  //   ).classe;
  //   if (ancienneClasse === "image-filter") {
  //     setFilters((ancienEtat) =>
  //       ancienEtat.map((filtre) =>
  //         filtre.image === image
  //           ? { ...filtre, classe: "image-filter filtreActif", active: true }
  //           : filtre
  //       )
  //     );
  //   } else {
  //     setFilters((ancienEtat) =>
  //       ancienEtat.map((filter) =>
  //         filter.image === image
  //           ? { ...filter, classe: "image-filter", active: false }
  //           : filter
  //       )
  //     );
  //   }
  // };

  const handleClickFiltre = (image) => {
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      classe:
        filter.image === image ? "image-filter filtreActif" : "image-filter",
      active: filter.image === image,
    }));

    setFilters(updatedFilters);
  };

  const handleResetFiltre = () => {
    setFilters(FiltersTab);
  };

  return (
    <main className="dragSectionFilters">
      <section className="globalFiltersDrag">
        <div className="filtersDragTitle">
          <p className="titreBouton" title="Clique sur le bouton pour modifier">
            Sélectionnez les éléments de votre choix
          </p>
        </div>
        <div className="filtersDragFilters">
          <div className="div-filtre-theme">
            {filters.map(
              (filter) =>
                filter.id >= 13 && (
                  <img
                    className={filter.classe}
                    onClick={() =>
                      handleClickFiltre(filter.image, filter.element)
                    }
                    src={filter.image}
                    alt={`"filtre" ${filter.title}`}
                    title={filter.title}
                    key={filter.id}
                  />
                )
            )}
          </div>
          <button
            className="dragFilterReset"
            type="button"
            onClick={handleResetFiltre}
          >
            Réinitialiser les filtres
          </button>
        </div>
      </section>
      <section className="SwitchButtonDrag">
        <SwitchButton />
        <p>Changer le mode</p>
      </section>
    </main>
  );
}

export default FiltersDrag;
