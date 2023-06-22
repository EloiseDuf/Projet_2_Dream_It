import "./Bundle.scss";

import Cards from "../components/Cards";

function Bundle({ dreams }) {
  return (
    <div className="bundleCards">
      {dreams.map((dream) => (
        <Cards dreams={dream} key={dream.id} />
      ))}
    </div>
  );
}

export default Bundle;
