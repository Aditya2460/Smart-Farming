import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  return (
    <div className="w-full h-100 bg-blue-50 object-cover overflow-hidden max-w-4xl-xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }
    }
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/22/b1/cf/22b1cf97498fcac2615ac75f10f1c857.jpg"
            alt="Nature"
            className="h-95 w-full object-fill rounded-3xl"
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/22/b1/cf/22b1cf97498fcac2615ac75f10f1c857.jpg"
            alt="Nature"
            className="h-95 w-full object-fill rounded-3xl"
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/22/b1/cf/22b1cf97498fcac2615ac75f10f1c857.jpg"
            alt="Nature"
            className="h-95 w-full object-fill rounded-3xl"
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/22/b1/cf/22b1cf97498fcac2615ac75f10f1c857.jpg"
            alt="Nature"
            className="h-95 w-full object-fill rounded-3xl"
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/22/b1/cf/22b1cf97498fcac2615ac75f10f1c857.jpg"
            alt="Nature"
            className="h-95 w-full object-fill rounded-3xl"
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/22/b1/cf/22b1cf97498fcac2615ac75f10f1c857.jpg"
            alt="Nature"
            className="h-95 w-full object-fill rounded-3xl"
          />
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/22/b1/cf/22b1cf97498fcac2615ac75f10f1c857.jpg"
            alt="Forest"
            className="h-95 w-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
