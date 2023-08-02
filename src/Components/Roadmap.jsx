import { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import CardsSlider from "./CardsSlider";

const Roadmap = () => {
  const images = ["mobile_box1.svg", "c1_mobile.png", "c3_mobile.svg"];

  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(null); //? this use state is used for get the width
  const [nextClicked, setNextClicked] = useState(false); // New state to track whether next button has been clicked

  const handlenextImage = () => {
    setcurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (!nextClicked) {
      setNextClicked(true); // Set nextClicked to true when the user clicks the next button for the first time
    }
  };

  const handlePreviousClick = () => {
    if (nextClicked && currentImageIndex > 0) {
      setcurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  // ? use to find the width of a particular object, image or anything

  useEffect(() => {
    const hideOnDesktopImage = document.querySelector(".hidenOnDesktop");
    if (hideOnDesktopImage) {
      setImageWidth(hideOnDesktopImage.clientWidth);
    }
  }, [currentImageIndex]);

  return (
    <>
      {nextClicked === false
        ? console.log("nextClcked is false")
        : console.log("its true")}

      <div className="roadmap-section">
        <div className="roadmap-back"></div>
        <div className="container">
          <div className="roadmap-content">
            <h1>Revolutionizing the crypto world with ShAIba</h1>
            <p>
              Welcome to $SHAI world - we deliver 4 AI pocket telegram bots that
              make operating in the web3 world much effortless. With real-time
              information on coins, market trends, and popular Twitter users,
              shAIba is the tool you need to stay ahead of the game. And it’s
              not all! The $SHAI token provides Real-Yield opportunities to its
              holders. Join the AI revolution with $SHAI!
            </p>
          </div>
          <div className="roadmap-lower">
            <h2>Roadmap</h2>
            <div className="roadmap-cards">
              <div>
                <img
                  src="/assets/images/c1_desktop.png"
                  alt="#"
                  className="hideOnMobile"
                />
              </div>
              <div className="maincard-parent relative">
                <img
                  src={`/assets/images/${images[currentImageIndex]}`}
                  alt="#"
                  className={`hidenOnDesktop  ${
                    currentImageIndex === 1 ? "custom-width" : ""
                  } `}
                />
                <FcPrevious
                  className={`previous ${nextClicked === false ? "low" : ""}`}
                  onClick={handlePreviousClick}
                />
                <FcNext className="next" onClick={handlenextImage} />
                <img
                  src="/assets/images/c2_desktop.png"
                  alt="#"
                  className="hideOnMobile"
                />
              </div>
              <div>
                <img
                  src="/assets/images/c3_desktop.png"
                  alt="#"
                  className="hideOnMobile"
                />
              </div>
            </div>
          </div>
        </div>
        <CardsSlider />
      </div>
      {/* {imageWidth && (
        <p>Image width with class hideOnDesktop: {imageWidth}px</p>
      )} */}
    </>
  );
};

export default Roadmap;
