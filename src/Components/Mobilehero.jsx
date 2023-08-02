import { useState } from "react";

const Mobilehero = () => {
  const [hoveredIndex, setHoveredIndex] = useState();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container">
      <div className="mobile-hero">
        <div className="mobile-content">
          <div
            className="mb-first relative"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/assets/images/mb-bot1.png" className="width" alt="#" />

            {hoveredIndex === 0 && (
              <img
                src="/assets/images/mb-card1.svg"
                className="mb-first-width"
                alt="#"
              />
            )}
          </div>

          <div
            className="mb-fourth relative"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/assets/images/mb-bot4 png.png"
              className="width"
              alt="#"
            />
            {hoveredIndex === 3 && (
              <img
                src="/assets/images/mb-card3.svg"
                alt="#"
                className="mb-card-width"
              />
            )}
          </div>
        </div>

        <div className="mb-main-img">
          <img src="/assets/images/mb-home.png" alt="#" />
        </div>

        <div className="flex">
          <div
            className="mb-second relative"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/assets/images/mb-bot2.png" className="width" alt="#" />

            {hoveredIndex === 1 && (
              <img
                src="/assets/images/mb-card2.svg"
                alt="#"
                className="mb-card-width"
              />
            )}
          </div>

          <div
            className="mb-third relative"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/assets/images/mb-bot3.png" className="width" alt="#" />
            {hoveredIndex === 2 && (
              <img
                src="/assets/images/mb-card4.svg"
                alt="#"
                className="mb-card-width"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilehero;
