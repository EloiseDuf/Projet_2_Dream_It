// import { useState } from "react";
// import Popup from "../components/Popup";
// import "./Pagetest.scss";

// function Pagetest() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleOpenPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const handleSubmitPopup = (username, password) => {
//     // Faire quelque chose avec les valeurs du pseudo et du mot de passe
//     setIsPopupOpen(false);
//   };

//   return (
//     <>
//       <h1>je suis le H1 </h1>
//       <div>
//         <h1>Exemple de fenêtre modale</h1>
//         <button type="button" onClick={handleOpenPopup}>
//           Ouvrir la fenêtre modale
//         </button>
//         <Popup
//           isOpen={isPopupOpen}
//           onClose={handleClosePopup}
//           onSubmit={handleSubmitPopup}
//         />
//       </div>
//     </>
//   );
// }

// export default Pagetest;
