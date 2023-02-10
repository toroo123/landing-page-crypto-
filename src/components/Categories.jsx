import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import categor1 from '../images/categior1.png'
import categor2 from '../images/categior2.png'
import categor3 from '../images/categior3.png'
import categor4 from '../images/categior4.png'
import categor5 from '../images/categior5.png'
import categor6 from '../images/categior6.png'
import categor7 from '../images/categior7.png'
import categor8 from '../images/categior8.png'
import categor9 from '../images/categior9.png'
export default function Categories() {
    let data = [
        {
            id : 1,
            img : categor1,
            img1 : categor2,
            img2 : categor3,
            footer : "Art"
        },
        {
            id : 2,
            img : categor4,
            img1 : categor5,
            img2 : categor6,    
            footer : "Collectibles"
        },
        {
            id : 3,
            img : categor7,
            img1 : categor8,
            img2 : categor9,
            footer : "Vertual Worlds & Metaverse"
        }
    ]
  return (
    <div className='categories'>
        <div className='gradient-text'>
               <div className=' text-[48px] font-bold flex justify-center pb-8'>Top Categories</div>
         </div>
            <Swiper 
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                    {data.map((state,id) => (
                        <SwiperSlide>
                            <div className='categories-list'>
                                <div className='card-categories'>
                                    <div className='card-image'>
                                        <div >
                                            <img src={state.img} alt="" className='w-[150px] h-[150px] rounded-2xl '/>
                                            <img src={state.img1} alt="" className='w-[150px] h-[150px] rounded-2xl mt-2'/>
                                        </div>
                                    </div>
                                    <img src={state.img2} alt="" className='pl-2 w-[250px] h-[308px] rounded-2xl'/>
                                </div>
                                <div className='text-white'>{state.footer}</div>
                            </div>
                        </SwiperSlide>
                    ))
                    }
            </Swiper>
    </div>
  )
}
