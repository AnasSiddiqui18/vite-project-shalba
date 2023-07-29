import { GrTwitter } from "react-icons/gr";
import { BiLogoTelegram } from "react-icons/bi";

const Subfooter = () => {
  return (
    <div className="container">
      <div className="subfooter">
        <div className="hr-line"></div>

        <div className="flex">
          <div className="footer-icons">
            <div className="icons">
              <GrTwitter />
            </div>
            <div className="icons">
              <BiLogoTelegram />
            </div>
          </div>
          <div className="terms flex gap">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="copy">
            <p>2023 All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
