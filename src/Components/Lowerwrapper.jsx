import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import Footer from "../Footer";
import Subfooter from "../Subfooter";

const Lowerwrapper = () => {
  return (
    <div className="lowerBackground">
      <Roadmap />
      <Tokenomics />
      <Footer />
      <Subfooter />
    </div>
  );
};

export default Lowerwrapper;
