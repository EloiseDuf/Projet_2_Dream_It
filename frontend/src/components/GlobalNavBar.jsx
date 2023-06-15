import "./GlobalNavBar.scss";
import Filters from "./Filters";
import NavBar from "./NavBar";

function GlobalNavBar() {
  return (
    <section className="globalNavBar">
      <Filters />
      <NavBar />
    </section>
  );
}

export default GlobalNavBar;
