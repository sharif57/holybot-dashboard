import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import userImg from "../../assets/images/dashboard-profile.png";
import { Rate } from "antd";

const HostReviewSlider = ({}) => {
  return (
    <Swiper
      slidesPerView={3.7}
      spaceBetween={20}
      centeredSlides={true}
      pagination={false}
      loop={true}
      autoplay={{
        delay: 3000, // Time between slides (in ms)
        disableOnInteraction: false, // Keeps autoplay running even after interaction
      }}

      modules={[Pagination, Autoplay]}
      speed={4000}
      className=""
    >
      {["", "", "", "", "", "", "", "", "", ""].map((_item, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-xl border border-blue-300 px-6 py-4 bg-blue-50 space-y-3">
            <div className="flex justify-setart items-center gap-2">
              <img
                src={userImg}
                alt="user"
                className="h-[40px] w-[40px] rounded-full"
              />
              <div className="space-y-0.5">
                <p className="font-semibold text-sm">{"Cameron Williamson"}</p>
                <div className="flex justify-start items-center gap-2">
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ fontSize: "16px" }}
                  />
                  <p className="text-[14px] text-slate-400">2 min ago</p>
                </div>
              </div>
            </div>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              repudiandae ea voluptas.
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HostReviewSlider;
