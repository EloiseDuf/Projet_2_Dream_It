// import React, { useState } from "react";
// import "./Drag.scss";
// import Cards from "./Cards";

// function Drag({ dreams }) {
//   const [column1, setColumn1] = useState(dreams);
//   const [column2, setColumn2] = useState([]);

// console.log(dreams)

//   const handleDragStart = (event, dream) => {
//     event.dataTransfer.setData("text/plain", JSON.stringify(dream));
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
//             className="carte"
//             draggable
//             onDragStart={(event) => handleDragStart(event, item)}
//           >
//             <Cards dream={item} />
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
//             className="carte"
//             draggable
//             onDragStart={(event) => handleDragStart(event, item)}
//           >
//             <Cards dream={item} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Drag;

import React, { useState } from "react";
import "./Drag.scss";

function Drag() {
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ];

  // const [items, setItems] = useState([
  //   { id: 1, text: "Item 1" },
  //   { id: 2, text: "Item 2" },
  //   { id: 3, text: "Item 3" },
  // ]);

  const [column1, setColumn1] = useState(items);
  const [column2, setColumn2] = useState([]);

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetColumn) => {
    event.preventDefault();
    const droppedItem = JSON.parse(event.dataTransfer.getData("text/plain"));

    if (
      targetColumn === "idcolumn1" &&
      column1.every((item) => item.id !== droppedItem.id)
    ) {
      setColumn1([...column1, droppedItem]);
      setColumn2(column2.filter((item) => item.id !== droppedItem.id));
    } else if (
      targetColumn === "column2" &&
      column2.every((item) => item.id !== droppedItem.id)
    ) {
      setColumn2([...column2, droppedItem]);
      setColumn1(column1.filter((item) => item.id !== droppedItem.id));
    }
  };

  return (
    <div className="container">
      <div
        className="column"
        id="idcolumn1"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, "idcolumn1")}
      >
        {column1.map((item) => (
          <div
            key={item.id}
            className="item"
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div
        className="column"
        id="column2"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, "column2")}
      >
        {column2.map((item) => (
          <div
            key={item.id}
            className="item"
            draggable
            onDragStart={(event) => handleDragStart(event, item)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drag;
