import { GrTwitter } from "react-icons/gr";
import { BiLogoTelegram } from "react-icons/bi";

const Subfooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <div className="subfooter">
        <div className="hr-line"></div>

        <div className="subContent">
          <div className="footer-icons">
            <div className="icons sub-icons">
              <GrTwitter />
            </div>
            <div className="icons sub-icons">
              <BiLogoTelegram />
            </div>
          </div>
          <div className="terms subContent gap">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="copy">
            <p>{currentYear} All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
