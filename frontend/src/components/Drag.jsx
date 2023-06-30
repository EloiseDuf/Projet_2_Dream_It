import React, { useState, useEffect, useContext } from "react";
import MyContext from "./Context";
import "./Drag.scss";
// import Cards from "./Cards";
import FiltersTab from "../assets/FiltersTab";
import FiltersDrag from "./FiltersDrag";
import imgPanier from "../assets/images/addPanier.png";
import CardsDrag from "./CardsDrag";
import MiniCards from "./MiniCards";

function Drag({ dreams, isOn }) {
  const { panier, setPanier } = useContext(MyContext);
  const [totalReve, setTotalReve] = useState(0);
  const [column1, setColumn1] = useState(dreams);
  const [column2, setColumn2] = useState([]);
  const [newReve, setNewReve] = useState([]);
  const [filterDreams, setFilterDreams] = useState([]);
  const [originalDreams, setOriginalDreams] = useState(column1);
  const [filters, setFilters] = useState(FiltersTab);
  // console.log("mon CL est ICI", dreams)
  // console.log("mon CL est ICI", dreams)
  // console.log("ICI CL Colone 1")
  // console.log(column1)

  const handleDragStart = (event, dream) => {
    event.dataTransfer.setData("application/json", JSON.stringify(dream));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetColumn) => {
    event.preventDefault();
    const droppedItem = JSON.parse(
      event.dataTransfer.getData("application/json")
    );

    if (
      targetColumn === "idColumn1" &&
      column1.every((dream) => dream.id !== droppedItem.id)
    ) {
      // setColumn1([...column1, droppedItem]);
      setColumn2(column2.filter((dream) => dream.id !== droppedItem.id));
    } else if (
      targetColumn === "idColumn2" &&
      column2.every((dream) => dream.id !== droppedItem.id)
    ) {
      setColumn2([...column2, droppedItem]);
      // setColumn1(column1.filter((dream) => dream.id !== droppedItem.id));
    }
  };

  const handleClickSendToPanier = () => {
    if (column2.length > 0) {
      const newPanier = panier.concat(newReve);
      setPanier(newPanier);
      setColumn2([]);
      const newTotal = 0;
      setTotalReve(newTotal);
    }
  };

  // useEffect utiliser car problème d'affichage. La page initialement n'affiche pas les cards. il faut passer par un useEfect pour envoyer les données
  // le .filter est la pour indiquer que nous souhaitons ce qui est different de colone2
  useEffect(() => {
    setColumn1(
      dreams.filter(
        (dream) => !column2.some((dream2) => dream2.id === dream.id)
      )
    );
  }, [dreams, column2]);

  useEffect(() => {
    const globalReve = column2;
    setNewReve([globalReve]);
    const newTotal = globalReve.reduce((acc, reve) => acc + reve.price, 0);
    setTotalReve(newTotal);
  }, [column2]);

  const handleFilter = () => {
    // on commence par réinitialiser filterDreams par la valeur initiale, c'est à dire "column1" contenant tous les reves, qui est l'état défini par les fonctions au dessus
    setFilterDreams(originalDreams);
    // on crée une variable intermédiaire filtered équivalent à un filtre de column1 avec seulement les dreams dont le filtre est actif
    const activeFilters = filters
      .filter((filtre) => filtre.active === true)
      .map((filtre) => filtre.element);
    // on cherche les filtres actifs et on renvoie le theme à conserver dans filtered
    if (activeFilters.length !== 0) {
      const filtered = originalDreams.filter((dream) =>
        activeFilters.includes(dream.element)
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
    setFilterDreams(column1);
    setOriginalDreams(column1);
    handleFilter();
  }, [column1, filters]);

  // ce second useEffect permet de conserver l'affichage des Cards lorsque la page est rafraichie
  useEffect(() => {
    setFilterDreams(originalDreams);
  }, [originalDreams]);

  return (
    <main className="container">
      <section className="dragColumnGlobal">
        <section
          className="column"
          id="idColumn1"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "idColumn1")}
        >
          {filterDreams.map((dream) => {
            if (
              dream.type === "custom" &&
              ((isOn && dream.mode === "dream") ||
                (!isOn && dream.mode === "nightmare"))
            ) {
              return (
                <div
                  key={dream.id}
                  className="carte"
                  draggable
                  onDragStart={(event) => handleDragStart(event, dream)}
                >
                  <CardsDrag dreams={dream} key={dream.id} />
                </div>
              );
            }
            return null;
          })}
        </section>
        <section
          className="column2"
          id="idColumn2"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "idColumn2")}
        >
          <div className="soustotCol">
            <div className="divtoDragInColumn2">
              {column2.map((dream) => (
                <div
                  key={dream.id}
                  className="carte"
                  draggable
                  onDragStart={(event) => handleDragStart(event, dream)}
                >
                  <MiniCards dreams={dream} key={dream.id} />
                </div>
              ))}
            </div>
            <div className="divSendToPanier">
              <div className="totalReveAlaCarte">
                <p>Sous total =</p>
                <p>{`${totalReve} €`}</p>
              </div>
            </div>
          </div>
          <button
            id="panierButton"
            type="button"
            onClick={handleClickSendToPanier}
          >
            <img src={imgPanier} alt="panier" />
          </button>
        </section>
      </section>
      <div className="FiltersDrag">
        <FiltersDrag
          filters={filters}
          setFilters={setFilters}
          FiltersTab={FiltersTab}
        />
      </div>
    </main>
  );
}

export default Drag;
