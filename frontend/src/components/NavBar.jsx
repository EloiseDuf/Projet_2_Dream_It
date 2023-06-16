// import { useState } from "react";
import "./NavBar.scss";

function NavBar() {
  // const [itemCount, setItemCount] = useState(0);

  // const addItem = (item) => {

  //     setItemCount(itemCount + 1);
  // } {itemCount}

  return (
    <div className="Buttons">
      <button id="Home" type="button">
        <img src="src/assets/images/Home.png" alt="Home" />
      </button>
      <button id="Account" type="button">
        <img src="src/assets/images/Account.png" alt="Account" />
      </button>
      <button id="Cart" type="button">
        <img src="src/assets/images/Cart.png" alt="Cart" />
        <span className="item-count" />
      </button>
    </div>
  );
}

export default NavBar;
