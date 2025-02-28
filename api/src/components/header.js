import "../App.css";

import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img7 from "../images/img7.jpeg";
import img11 from "../images/img11.jpeg";
import img13 from "../images/img13.jpeg";
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
    <div className="relative w-full h-25rem}">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={0} // Removes space between slides
        slidesPerView={1}
        // navigation
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
           

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img5}
              className="image w-full h-{7rem} object-cover"
              alt="Slide 6"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img7}
              className="image w-full h-{7rem} object-cover"
              alt="Slide 7"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img11}
              className="image w-full h-{7rem} object-cover"
              alt="Slide 8"
            />
          </div>
        </SwiperSlide>

    
        {/* <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img14}
              className="w-full h-{7rem} object-cover"
              alt="Slide 10"
            />
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img15}
              className="image w-full h-{7rem} object-cover"
              alt="Slide 11"
            />
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img19}
              className="image w-full h-{7rem} object-cover"
              alt="Slide 13"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-{6.25rem} flex items-center justify-center">
            <img
              src={img23}
              className="image w-full h-{7rem} object-cover"
              alt="Slide 15"
            />
          </div>
        </SwiperSlide>
       
      </Swiper>

      {/* Navigation Buttons */}
      <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition">
        &larr;
      </button>
      <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition">
        &rarr;
      </button>
    </div>
  );
}

export default Header;
