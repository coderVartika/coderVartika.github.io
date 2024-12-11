import React from 'react'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Introduction = () => {
  return (
    <>
    <div className="lg:pl-20 lg:pr-20">
         <div className="mt-10 relative">
          <div className="swiper-button image-swiper-button-prev absolute">
            <img src="https://www.starbucks.in/swiperbtnleft.22de7f3e8db5d523.svg" alt="Left" />
          </div>
          <div className="swiper-button image-swiper-button-next absolute">
            <img src="https://www.starbucks.in/swiperbtnright.cbc1d309941ecd98.svg" alt="Right" />
          </div>
        <Swiper
     
      modules={[Navigation]}
      navigation={{
        nextEl:".image-swiper-button-next",
        prevEl:".image-swiper-button-prev",
        disabledClass:"swiper-button-disabled"
      }}
      mousewheel={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide>
        <div className="w-full rounded-lg shadow-sm p-5 bg-teal-500 relative cursor-pointer">
            <div className="flex justify-end">
                <span className="text-xs font-semibold text-white">*T&C Apply</span>
            </div>
            <div>
                <div className="absolute left-5 top-1">
                    <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/285_x_595_App_removebg_preview_2_c4bc942184.png" alt="" width={80}/>
                </div>
                <div className="ml-28 text-white mb-2">
                    <p className="text-[#00000de]">Starbucks</p>
                    <p className="mt-2 font-semibold text-xl text-[#00000de]"> Beverage Subscription </p>
                    <p className="mt-2 text-[#00000de]"> Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply. </p>
                
                <div className="flex justify-end">
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-3xl shadow ">Know More</button>
                </div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full rounded-lg shadow-sm p-5 bg-[#006241] relative cursor-pointer">
           
            <div>
                <div className="absolute left-0 top-1">
                    <img src="	https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Group_1087_b1db5faed6.png" alt="" width={80}/>
                </div>
                <div className="ml-28 text-white mb-2">
                    <p className="text-[#00000de] text-sm">Now Brewing</p>
                    <p className="mt-2 font-semibold text-xl text-[#00000de]"> Starbucks Menu </p>
                    <p className="mt-2 text-[#00000de]"> Indulge in season festing!Make your sips extra special.Explore Menu. </p>
                
                <div className="flex justify-between mt-5">
                 <div>
                 <p className="text-xs">Starting from</p>
                 <p >Rs. 250</p>
                 </div>
                  <button className="bg-[#00754a] text-white font-semibold py-2 px-4 rounded-3xl shadow ">Order Now</button>
                </div>
                </div>
            </div>
        </div>

      </SwiperSlide>

      
    </Swiper>

    </div>
    </div>
    </>
  )
}

export default Introduction