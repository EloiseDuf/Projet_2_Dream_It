import "./DemandeParticuliereSection.scss";

function DemandeParticuliereSection() {
  return (
    <main className="mainDemandeParticuliere">
      <h1>Une demande particulière ?</h1>
      <section className="texteDemandeParticuliere">
        <p>
          Les scénarios de rêve ou les éléments de rêve à la carte proposés ne
          vous conviennent pas?
        </p>
        <p>
          N'hésitez pas à nous décrire votre scénario idéal, nous nous
          chargerons de créer un rêve à votre goût !
        </p>
      </section>
      <textarea placeholder="Décrivez nous votre rêve idéal, ou des suggestions d'éléments pour nos rêves à la carte..." />
      <button type="button" value="Faites votre demande">
        Faites votre demande
      </button>
    </main>
  );
}

export default DemandeParticuliereSection;
