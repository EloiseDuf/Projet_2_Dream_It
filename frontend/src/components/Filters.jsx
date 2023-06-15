import { useState } from "react";
import "./Filters.scss";

const mesFiltres = [
  {
    id: 1,
    image: "https://img.icons8.com/?size=1x&id=f2Pd07NxP50-&format=png",
    title: "Voyage",
    active: false,
    classe: "image-filter",
  },
  {
    id: 2,
    image: "https://img.icons8.com/?size=1x&id=CwT76QEIQphR&format=png",
    title: "Action / Aventure",
    active: false,
    classe: "image-filter",
  },
  {
    id: 3,
    image: "https://img.icons8.com/?size=1x&id=KJo4_dTC-coU&format=png",
    title: "Comédie",
    active: false,
    classe: "image-filter",
  },
  {
    id: 4,
    image: "https://img.icons8.com/?size=1x&id=edESY4RJ6d_B&format=png",
    title: "Science Fiction",
    active: false,
    classe: "image-filter",
  },
  {
    id: 5,
    image: "https://img.icons8.com/?size=1x&id=95263&format=png",
    title: "Fantastique",
    active: false,
    classe: "image-filter",
  },
  {
    id: 6,
    image: "https://img.icons8.com/?size=1x&id=48959&format=png",
    title: "Policier",
    active: false,
    classe: "image-filter",
  },
  {
    id: 7,
    image: "https://img.icons8.com/?size=1x&id=ExjPRAX81HOH&format=png",
    title: "Guerre",
    active: false,
    classe: "image-filter",
  },
  {
    id: 8,
    image: "https://img.icons8.com/?size=1x&id=49649&format=png",
    title: "Automobile",
    active: false,
    classe: "image-filter",
  },
  {
    id: 9,
    image: "https://img.icons8.com/?size=1x&id=49597&format=png",
    title: "Culinaire",
    active: false,
    classe: "image-filter",
  },
  {
    id: 10,
    image: "https://img.icons8.com/?size=1x&id=3OfJfNUd1BuI&format=png",
    title: "Relaxation",
    active: false,
    classe: "image-filter",
  },
  {
    id: 11,
    image: "https://img.icons8.com/?size=1x&id=49604&format=png",
    title: "Romantique",
    active: false,
    classe: "image-filter",
  },
  {
    id: 12,
    image: "https://img.icons8.com/?size=1x&id=1EJcqeUdGuvU&format=png",
    title: "Pornographique",
    active: false,
    classe: "image-filter",
  },
  {
    id: 13,
    image: "https://img.icons8.com/?size=1x&id=Whkx361Z-IK1&format=png",
    title: "Protagoniste",
    active: false,
    classe: "image-filter",
  },
  {
    id: 14,
    image: "https://img.icons8.com/?size=1x&id=M61Ezw-zpoy6&format=png",
    title: "Antagoniste",
    active: false,
    classe: "image-filter",
  },
  {
    id: 15,
    image: "https://img.icons8.com/?size=1x&id=yWgzoxYD__3z&format=png",
    title: "Lieux",
    active: false,
    classe: "image-filter",
  },
  {
    id: 16,
    image: "https://img.icons8.com/?size=1x&id=58892&format=png",
    title: "Actions",
    active: false,
    classe: "image-filter",
  },
  {
    id: 17,
    image: "https://img.icons8.com/?size=1x&id=JWeOybaezIaa&format=png",
    title: "Objects",
    active: false,
    classe: "image-filter",
  },
  {
    id: 18,
    image: "https://img.icons8.com/?size=1x&id=103848&format=png",
    title: "Véhicules",
    active: false,
    classe: "image-filter",
  },
  {
    id: 19,
    image: "https://img.icons8.com/?size=1x&id=66496&format=png",
    title: "Météo",
    active: false,
    classe: "image-filter",
  },
];

function Filters() {
  const [typeReve, setTypeReve] = useState("Scénario");

  const [filtres, setFiltres] = useState(mesFiltres);

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
    </section>
  );
}

export default Filters;
