import { GrTwitter } from "react-icons/gr";
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = ({ togglemenu }) => {
  return (
    <div className="container">
      <div className="navigation-content">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="#" />
        </div>
        <div className="navbar">
          <nav className="op-low">
            <ul>
              <li>About Us</li>
              <li>Tokenomics</li>
              <li>Roadmap</li>
            </ul>
          </nav>

          <div className="icon-parent">
            <div className="icons bg-white ">
              <GrTwitter />
            </div>
            <div className="icons bg-white">
              <BiLogoTelegram />
            </div>
            <div className="menu-icon">
              <AiOutlineMenu onClick={togglemenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
