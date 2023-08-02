import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Menu = ({ menu, togglemenu }) => {
  useEffect(() => {
    if (menu) {
      document.body.classList.add("hideScroll");
    } else {
      document.body.classList.add("showScroll");
    }
  }, [menu]);

  return (
    <div className={`menu ${menu ? "show" : ""}`}>
      <div className="menu-top">
        <img src="/assets/images/logo.png" alt="" />
        <RxCross2 className="cross-icon" onClick={togglemenu} />
      </div>

      <div className="menu-bottom">
        <nav>
          <ul>
            <li onClick={togglemenu}>About Us</li>
            <li onClick={togglemenu}>Tokenomics</li>
            <li onClick={togglemenu}>Roadmap</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
