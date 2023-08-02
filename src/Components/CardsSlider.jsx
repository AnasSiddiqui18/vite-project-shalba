import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const CardsSlider = () => {
  const [width, setwidth] = useState(null);

  useEffect(() => {
    const findWidth = document.querySelector(".mainImage");
    if (findWidth) {
      setwidth(findWidth.clientWidth);
    }
  }, [width]);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop="true"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card-1">
            <img src="/assets/images/mobile_box1.svg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-2">
            <img
              src="/assets/images/c1_mobile.png"
              alt=""
              className="secondCard mainImage"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-3">
            <img src="/assets/images/c3_mobile.svg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardsSlider;
