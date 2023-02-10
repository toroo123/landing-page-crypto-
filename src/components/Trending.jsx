import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../images/trend1.png'
import img2 from '../images/trend2.png'
import img3 from '../images/trend3.png'
import img4 from '../images/trend4.png'
import pro1 from '../images/pro1.png'
import pro2 from '../images/pro2.png'
import pro3 from '../images/pro3.png'
import pro4 from '../images/pro4.png'
import eth from '../images/etherium.png'
export default function Trending() {
    let data = [
        {
            id : 1,
            img : img1,
            profile : pro1,
            eth : eth,
            name : "HAPE #8064",
            lname : "HAPE PRIME",
            latestPrice : "15.8 ETH",
            latestText : "Latest Bid",
            fromPrice : "9.48 ETH",
            fromText : "from",
            price : "$180,345",
            precent : "12.15%"
        },
        {
            id : 2,
            img : img2,
            profile : pro2,
            eth : eth,
            name : "MONT #8584",
            lname : "MONT PRIME",
            latestPrice : "13.2 ETH",
            latestText : "Latest Bid",
            fromPrice : "6.1 ETH",
            fromText : "from",
            price : "$150,345",
            precent : "10.6%"
        },
        {
            id : 3,
            img : img3,
            profile : pro3,
            eth : eth,
            name : "HOOK #8156",
            lname : "HOOK PRIME",
            latestPrice : "23.1 ETH",
            latestText : "Latest Bid",
            fromPrice : "10.45 ETH",
            fromText : "from",
            price : "$250,120",
            precent : "24.8%"
        },
        {
            id : 4,
            img : img4,
            profile : pro4,
            eth : eth,
            name : "POPO #9015",
            lname : "POP PRIME",
            latestPrice : "11.8 ETH",
            latestText : "Latest Bid",
            fromPrice : "7.12 ETH",
            fromText : "from",
            price : "$100,256",
            precent : "10.08%"
        },
        {
            id : 5,
            img : img2,
            profile : pro1,
            eth : eth,
            name : "HAPE #8064",
            lname : "HAPE PRIME",
            latestPrice : "15.8 ETH",
            latestText : "Latest Bid",
            fromPrice : "9.48 ETH",
            fromText : "from",
            price : "$180,345",
            precent : "12.15%"
        },
        {
            id : 6,
            img : img1,
            profile : pro2,
            eth : eth,
            name : "MONT #8584",
            lname : "MONT PRIME",
            latestPrice : "13.2 ETH",
            latestText : "Latest Bid",
            fromPrice : "6.1 ETH",
            fromText : "from",
            price : "$150,345",
            precent : "10.6%"
        },
        {
            id : 7,
            img : img3,
            profile : pro3,
            eth : eth,
            name : "HOOK #8156",
            lname : "HOOK PRIME",
            latestPrice : "23.1 ETH",
            latestText : "Latest Bid",
            fromPrice : "10.45 ETH",
            fromText : "from",
            price : "$250,120",
            precent : "24.8%"
        },
        {
            id : 8,
            img : img4,
            profile : pro4,
            eth : eth,
            name : "POPO #9015",
            lname : "POP PRIME",
            latestPrice : "11.8 ETH",
            latestText : "Latest Bid",
            fromPrice : "7.12 ETH",
            fromText : "from",
            price : "$100,256",
            precent : "10.08%"
        }
    ]
  return (
    <div className='frame'>
        <div className='gradient-text pb-[32px]'>
            <div className=' text-[48px] font-bold flex justify-center'>Trending NFTs</div>
        </div>
        <Swiper 
        slidesPerView={4}
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
                <SwiperSlide className='card-list'>
                    <div className='card'>
                        <div><img src={state.img} alt="" className='w-[300px] h-[300px]' /></div>
                        <div className='flex justify-between items-center'> 
                            <img src={state.profile} alt="" className='w-[52px] h-[52px] rounded-2xl'/>
                            <div className='text-white'>
                                <h1 className='text-[22px]'>{state.name}</h1>
                                <p className='text-[12px]'>{state.lname}</p>
                            </div>
                            <img src={state.eth} alt="" className='w-[40px] h-[40px]'/>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div className='text-white'>
                                    <h1 className='text-[20px]'>{state.latestPrice}</h1>
                                    <p className='text-[12px]'>{state.latestText}</p>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-[20px]'>{state.fromPrice}</h1>
                                    <p className='text-[12px]'>{state.fromText}</p>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-[20px]'>{state.price}</h1>
                                    <p className='text-[12px] text-[#24FF00] text-right'>{state.precent}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='collect_btn'>Collect Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                
            ))
            }
            
        </Swiper>
        <div className='flex justify-center py-4'>
            <button className='see_button'>See more</button>
        </div>
        
    </div>
    
  )
}
