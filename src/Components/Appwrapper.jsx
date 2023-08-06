import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "./Hero";
import Mobilehero from "./Mobilehero";
import Menu from "./Menu";

const Appwrapper = () => {
  const [menu, setMenu] = useState(false);

  const togglemenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="background">
      {/* Pass the menu state and togglemenu function as props to Navigation */}
      <Navigation togglemenu={togglemenu} />
      <Menu menu={menu} togglemenu={togglemenu} />
      <Home menu={menu} togglemenu={togglemenu} />
      <Mobilehero />
    </div>
  );
};

export default Appwrapper;
