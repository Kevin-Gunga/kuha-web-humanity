import "../App.css";

import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img7 from "../images/img7.jpeg";
import img11 from "../images/img11.jpeg";
import img13 from "../images/img13.jpeg";
import img14 from "../images/img14.jpeg";
import img15 from "../images/img15.jpeg";
import img18 from "../images/img18.jpeg";
import img19 from "../images/img19.jpeg";
import img21 from "../images/img21.jpeg";
import img23 from "../images/img23.jpeg";
import img24 from "../images/img24.jpeg";
import img27 from "../images/img27.jpeg";
import img1 from "../images/img1.jpg";
import img3 from "../images/img3.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function Header() {
  return (
    <div className="w-full h-{6.25rem}">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={0} // Removes space between slides
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img1}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 1"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img3}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 2"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img8}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 3"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img9}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 4"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img4}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 5"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img5}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 6"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img7}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 7"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img11}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 8"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img13}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 9"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img14}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 10"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img15}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 11"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img18}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 12"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img19}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 13"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img21}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 14"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img23}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 15"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img24}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 16"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img27}
              className="w-full h-{6.25rem} object-cover"
              alt="Slide 17"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
