import "./FavorisSection.scss";
import { useContext } from "react";
import MyContext from "./Context";
import Cards from "./Cards";

function FavorisSection() {
  const { user } = useContext(MyContext);

  // destructuration de user
  const { favoris } = user;

  // console.log(favoris);

  return (
    <main className="mainFavorisSection">
      <h2 className="mesFavoris">Mes Favoris</h2>
      <section className="mainVide" />
      <section className="main-favoris-container">
        <div className="div-vide-left" />
        <div className="div-favoris-container">
          {favoris.map((favori) => (
            <div>
              <Cards dreams={favori} key={favori.id} />
            </div>
          ))}
        </div>
        <div className="div-vide-right" />
      </section>
    </main>
  );
}

export default FavorisSection;
