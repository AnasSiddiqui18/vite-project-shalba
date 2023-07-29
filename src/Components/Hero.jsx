import { useState } from "react";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container">
      <div className="hero-content">
        <div className="left logo-parent">
          <div
            className="first relative"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/images/fox1.svg"
              alt="#"
              className="hero-img-width"
            />

            {hoveredIndex === 0 && (
              <img
                src="/assets/images/chatbot.svg"
                alt="#"
                className="cards-width"
              />
            )}
          </div>
          <div
            className="second relative"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/images/fox2.svg"
              alt="#"
              className="hero-img-width"
            />

            {hoveredIndex === 1 && (
              <img
                src="/assets/images/market.svg"
                alt="#"
                className="cards-width"
              />
            )}
          </div>
        </div>

        <div className="main-img">
          <img src="/assets/images/main-fox.png" alt="#" />
        </div>

        <div className="right logo-parent">
          <div
            className="third relative"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/images/fox3.svg"
              alt="#"
              className="hero-img-width"
            />

            {hoveredIndex === 2 && (
              <img
                src="/assets/images/box3.svg"
                alt="#"
                className="cards-width"
              />
            )}
          </div>
          <div
            className="fourth relative"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/images/fox4.svg"
              alt="#"
              className="hero-img-width"
            />
            {hoveredIndex === 3 && (
              <img
                src="/assets/images/sniper.svg"
                alt="#"
                className="cards-width"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
