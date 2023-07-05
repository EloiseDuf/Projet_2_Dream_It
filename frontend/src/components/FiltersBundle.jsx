import "./FiltersBundle.scss";
import SwitchButton from "./SwitchButton";

function FiltersBundle({ filters, setFilters }) {
  window.addEventListener("scroll", function () {
    const element = document.getElementById("transition");
    const start = 125;

    if (window.scrollY > start) {
      element.style.paddingTop = "70px";
    } else {
      element.style.paddingTop = "0";
    }
  });

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
      <div className="filtersBundleTitle" id="transition">
        <p>Sélectionnez un ou plusieurs thèmes</p>
      </div>
      <div className="filtersBundleFilters">
        <div className="div-filtre-theme">
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
      <div className="SwitchButtonDrag">
        <p>Changer le mode</p>
      </div>
      <SwitchButton />
    </section>
  );
}

export default FiltersBundle;
