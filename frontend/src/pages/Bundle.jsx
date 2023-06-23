import "./Bundle.scss";

import Header from "../components/Header";
import FiltersBundle from "../components/FiltersBundle";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Bundle({ dreams }) {
  return (
    <>
      <Header />
      <div className="bundleCards">
        {dreams.map(
          (dream) =>
            dream.type === "ready-to-use" && (
              <Cards dreams={dream} key={dream.id} />
            )
        )}
        <FiltersBundle />
      </div>
      <Footer />
    </>
  );
}

export default Bundle;
