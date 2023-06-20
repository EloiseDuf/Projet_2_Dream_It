import "./ProfilSection.scss";

function ProfilSection() {
  return (
    <main className="mainProfilSection">
      <h1>Mon Profil</h1>
      <div>
        <section>
          <p>
            <span>Nom : </span>Manson
          </p>
          <p>
            <span>Prenom : </span>Marilyn
          </p>
          <p>
            <span>Age : </span>30 ans
          </p>
        </section>
        <section>
          <p>
            <span>Adresse : </span>15 rue St. Honoré, L.A , USA
          </p>
          <p>
            <span>Email : </span>marilyn.manson@youpi.us
          </p>
          <p>
            <span>Tel : </span>+32 7 79 85 76 20
          </p>
        </section>
      </div>
    </main>
  );
}

export default ProfilSection;
