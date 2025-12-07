
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Hero=()=>{
    return <> 
{/* <section className="text-center py-16 bg-green-100">
    <motion.h2
      className="text-4xl font-bold text-green-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Discover How Crops Grow
    </motion.h2>
    <p className="mt-4 text-gray-700 max-w-xl mx-auto">
      Explore detailed information about different crops, their growing
      conditions, and farming techniques.
    </p>
  </section> */}
<div className="w-full">
      {/* ======= Hero Swiper Section ======= */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="w-full h-[40vh] md:h-[50vh] rounded-b-2xl shadow-xl"
      >
        {/* ======= Slide 1 ======= */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="w-full h-full object-cover"
              alt="Crop Field"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Learn How Crops Grow
              </h1>
              <p className="text-gray-200 mt-3 text-lg md:text-xl">
                Explore detailed guides and farming methods.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* ======= Slide 2 ======= */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.pinimg.com/1200x/67/b2/6e/67b26e6b3226703220df81db9dc63a90.jpg"
              className="w-full h-full object-cover"
              alt="Rice Field"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Discover Farming Techniques
              </h1>
              <p className="text-gray-200 mt-3 text-lg md:text-xl">
                Best practices for healthy crop growth.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* ======= Slide 3 ======= */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.pinimg.com/1200x/f0/f4/39/f0f4393a258d87b4d7bef7d6f64ca3c6.jpg"
              className="w-full h-full object-cover"
              alt="Vegetable Garden"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Explore Crop Types
              </h1>
              <p className="text-gray-200 mt-3 text-lg md:text-xl">
                Complete information about every crop.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  
  </>
}
export default Hero;
