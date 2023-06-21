import "./ProfilSection.scss";
// import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "./Context";

// const MyContext = createContext(null);

function ProfilSection() {
  // const { utilisateur } = useParams();
  // const user = JSON.parse(atob(utilisateur));

  const user = useContext(MyContext);

  // destructuration de user
  const { nom, prenom, age, adresse, codePostal, ville, pays, email, tel } =
    user;

  return (
    <main className="mainProfilSection">
      <h1>Mon Profil</h1>
      <div>
        <section>
          <p>
            <span>Nom : </span>
            {nom}
          </p>
          <p>
            <span>Prenom : </span>
            {prenom}
          </p>
          <p>
            <span>Age : </span>
            {`${age} ans`}
          </p>
        </section>
        <section>
          <p>
            <span>Adresse : </span>
            {`${adresse}, ${codePostal} ${ville}, ${pays}`}
          </p>
          <p>
            <span>Email : </span>
            {email}
          </p>
          <p>
            <span>Tel : </span>
            {tel}
          </p>
        </section>
      </div>
    </main>
    // <main className="mainProfilSection">
    //   <h1>Mon Profil</h1>
    //   <div>
    //     <section>
    //       <p>
    //         <span>Nom : </span>Manson
    //       </p>
    //       <p>
    //         <span>Prenom : </span>Marilyn
    //       </p>
    //       <p>
    //         <span>Age : </span>30 ans
    //       </p>
    //     </section>
    //     <section>
    //       <p>
    //         <span>Adresse : </span>15 rue St. Honoré, L.A , USA
    //       </p>
    //       <p>
    //         <span>Email : </span>marilyn.manson@youpi.us
    //       </p>
    //       <p>
    //         <span>Tel : </span>+32 7 79 85 76 20
    //       </p>
    //     </section>
    //   </div>
    // </main>
  );
}

export default ProfilSection;
