import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import Productslist from "../dB/Productslist";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Star from "../assets/Star";

function ProductList() {
  const prevRef2 = useRef(null);

  return (
    <div className="">
      <div className="header flex  justify-between py-[1.5rem]">
        <h3 className="font-bold text-[1.8rem]">Our Best Collections</h3>
        <div className="controler flex gap-2 items-center m-3">
          <button
            className="py-[5px] px-[0.5rem] md:py-[10px] md:px-[1.5rem] border border-black  
            hover:bg-[#fb2f29] hover:text-white hover:border-white  "
            onClick={() => prevRef2.current.swiper.slidePrev()}
          >
            <BsArrowLeft />
          </button>
          <button
            className="py-[5px] px-[0.5rem] md:py-[10px] md:px-[1.5rem]  border border-black 
            hover:bg-[#fb2f29] hover:text-white hover:border-white  "
            onClick={() => prevRef2.current.swiper.slideNext()}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        ref={prevRef2}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        className="h-[32rem]"
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: { spaceBetween: 40, slidesPerView: 2 },
          1024: { spaceBetween: 40, slidesPerView: 3 },
        }}
      >
        {Productslist.map((Productlist, index) => (
          <SwiperSlide key={index} className={`flex flex-col h-[95%] `}>
            <div
              key={index}
              className={`img w-[95%]  h-[20rem] mx-auto md:mx-1 mb-[0.5rem] flex justify-center items-center 
              xl:w-[75%]

              ${Productlist.bgColor}`}
            >
              <img
                srcSet={`../img/${Productlist.img}.png`}
                alt=""
                className="object-contain w-[90%] md:w-[80%]  "
              />
            </div>
            <div className="text w-[95%] mx-auto flex flex-col">
              <div className=" h-[3rem] mt-2">{Productlist.title}</div>
              <div className=" pt-[2rem] md:pt-[3rem] lg:pt-[1.5rem]  ">
                <span className="line-through text-xs text-[#f98377] pr-2">
                  US$ {Productlist.priceb}
                </span>
                US$ {Productlist.price}
              </div>
              <div className="flex justify-between pt-1">
                <Star size={18} />
                <div
                  className="bg-[#fb2f29] md:px-5 md:py-3 px-4 py-2
                
                text-white font-semibold cursor-pointer "
                >
                  Buy Now
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ProductList;
