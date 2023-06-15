import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filters from "./components/Filters";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Filters />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <p>coucou</p>
    </div>
  );
}

export default App;
