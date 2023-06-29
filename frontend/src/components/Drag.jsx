import React, { useState, useEffect, useContext } from "react";
import MyContext from "./Context";
import "./Drag.scss";
// import Cards from "./Cards";
import CardsDrag from "./CardsDrag";
import MiniCards from "./MiniCards";
import imgPanier from "../assets/images/addPanier.png";

function Drag({ dreams, isOn }) {
  const { panier, setPanier } = useContext(MyContext);
  const [totalReve, setTotalReve] = useState(0);
  const [column1, setColumn1] = useState(dreams);
  const [column2, setColumn2] = useState([]);
  const [newReve, setNewReve] = useState([]);
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

  return (
    <main className="container">
      <section
        className="column"
        id="idColumn1"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, "idColumn1")}
      >
        {column1.map((dream) => {
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
    </main>
  );
}

export default Drag;

// import React, { useState } from "react";
// import "./Drag.scss";

// function Drag() {
//   const items = [
//     { id: 1, text: "Item 1" },
//     { id: 2, text: "Item 2" },
//     { id: 3, text: "Item 3" },
//   ];

//   // const [items, setItems] = useState([
//   //   { id: 1, text: "Item 1" },
//   //   { id: 2, text: "Item 2" },
//   //   { id: 3, text: "Item 3" },
//   // ]);

//   const [column1, setColumn1] = useState(items);
//   const [column2, setColumn2] = useState([]);

//   const handleDragStart = (event, item) => {
//     event.dataTransfer.setData("text/plain", JSON.stringify(item));
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event, targetColumn) => {
//     event.preventDefault();
//     const droppedItem = JSON.parse(event.dataTransfer.getData("text/plain"));

//     if (
//       targetColumn === "idcolumn1" &&
//       column1.every((item) => item.id !== droppedItem.id)
//     ) {
//       setColumn1([...column1, droppedItem]);
//       setColumn2(column2.filter((item) => item.id !== droppedItem.id));
//     } else if (
//       targetColumn === "column2" &&
//       column2.every((item) => item.id !== droppedItem.id)
//     ) {
//       setColumn2([...column2, droppedItem]);
//       setColumn1(column1.filter((item) => item.id !== droppedItem.id));
//     }
//   };

//   return (
//     <div className="container">
//       <div
//         className="column"
//         id="idcolumn1"
//         onDragOver={handleDragOver}
//         onDrop={(event) => handleDrop(event, "idcolumn1")}
//       >
//         {column1.map((item) => (
//           <div
//             key={item.id}
//             className="item"
//             draggable
//             onDragStart={(event) => handleDragStart(event, item)}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//       <div
//         className="column"
//         id="column2"
//         onDragOver={handleDragOver}
//         onDrop={(event) => handleDrop(event, "column2")}
//       >
//         {column2.map((item) => (
//           <div
//             key={item.id}
//             className="item"
//             draggable
//             onDragStart={(event) => handleDragStart(event, item)}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Drag;
