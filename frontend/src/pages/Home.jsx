import { Link } from "react-router-dom";
import Cards from "../components/Cards";

function Home() {
  return (
    <>
      <p>je suis dans le comp Home</p>
      <Cards />
      <Link to="/">Home</Link>
    </>
  );
}

export default Home;
