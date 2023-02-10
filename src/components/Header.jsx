import React, { Fragment, useEffect, useState} from 'react'
import Navbar from './Navbar'
import img from '../images/header-mokey.png'
import fox from '../images/fox.png'
const Header = () => {
  const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;
    const startTimer=()=>{
      const countDownDate = new Date("January 30, 2023").getTime();

      interval=setInterval(()=>{
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) /(1000 * 60 * 60));
        const minutes = Math.floor((distance % (60 * 60 * 1000)) /(1000 * 60 ));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if(distance < 0){
          clearInterval(interval.current)
        }
        else {
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      });
    };
    useEffect(()=>{
      startTimer();
    })
  return (
    <Fragment>
      <Navbar/>
      <div className='header'> 
        <div>
          <div className='text-[50px] text-white w-[380px] font-medium'>
            <p>Discover, Collect, & Sell </p>
            <div className='gradient-text'>Extraordinary</div>
            <p>NFTs</p>
          </div>
          <div className='text-white text-[18px] w-[400px] py-5 font-sans'>
          The Leading NFT Marketplace On Ethereum <br/> Home To The Next Generation Of Digital Creators. Discover The Best NFT Collections.
          </div>
          <div>
            <button className='btn1'>Explore</button>
            <button className='btn1 ml-4'>Create</button>
          </div>
          <div className='text-white flex items-center pt-10 italic'>
            <div className='px-5 items-center'>
              <h1 className='text-[32px] font-bold'>432K+</h1>
              <p>Collection</p>
            </div>
            <div className='px-5 items-center'>
              <h1 className='text-[32px] font-bold'>Artist</h1>
              <p>Artist</p>
            </div>
            <div className='px-5 items-center'>
              <h1 className='text-[32px] font-bold'>10K+</h1>
              <p>Community</p>
            </div>
          </div>
        </div>
        <div>
          <div className='background-border right-[220px] top-[160px] h-[300px] w-[400px]'></div>
          <div className='background-border right-[130px] top-[200px] h-[580px] w-[450px]'></div>
          <img src={img} alt="mokey" className='monkey-img'/>
          <div className='background-border right-[90px] top-[170px] py-4 px-6 backdrop-blur-lg'>
            <h1 className='text-white text-[24px] font-extrabold italic'>BID NOW!</h1>
            <p className='text-[14px] font-bold italic'>Latest Collection</p>
          </div>
          <div className='background-border right-[40px] top-[475px] px-4  py-3 backdrop-blur-lg flex'>
            <div>
              <img src={fox} alt="" className='w-[55px] h-[58px] rounded-2xl mx-[10px] my-1 '/>
            </div>
            <div className='grid justify-items-start pl-1'>
              <h1 className='text-white text-[30px] font-extrabold italic normal-nums'>HAPE#6959</h1>
              <p className='text-[14px] font-semibold italic'>HAPES PRIME</p>
            </div>
          </div>
          <div className='background-border backdrop-blur-lg py-3 px-4 right-[420px] top-[580px] flex'>
            <div className='px-5'>
              <h1 className='text-white text-[26px] font-bold italic normal-nums'>5.758 ETH</h1>
              <p className='text-[14px] font-semibold italic'>Latest Bid</p>
            </div>
            <div>
            <h1 className='text-white text-[26px] font-bold italic normal-nums'>$5758.31</h1>
              <p className='text-[14px] font-semibold italic text-[#24FF00]'>+12.45%</p>
            </div>
          </div>
          <div className='background-border backdrop-blur-lg py-3 px-8 right-[550px] top-[700px] grid justify-items-center'>
            <h1 className='text-white text-[24px] font-extrabold italic'>Auction</h1>
            <p className='text-white text-[14px] font-semibold italic '>End In</p>
          </div>
          <div className='background-border backdrop-blur-lg py-3 px-6 right-[180px] top-[700px]  flex'>
            <div className='px-2'>
              <h1 className='text-white text-[32px] font-extrabold italic'>{hours}</h1>
              <p className='text-white text-[14px] font-semibold italic'>Hours</p>
            </div>
            <div className='px-2'>
              <h1 className='text-white text-[32px] font-extrabold italic'>: {minutes}</h1>
              <p className='text-white text-[14px] font-semibold italic pl-2'>Minutes</p>
            </div>
            <div className='px-2'>
              <h1 className='text-white text-[32px] font-extrabold italic'>: {seconds}</h1>
              <p className='text-white text-[14px] font-semibold italic pl-2'>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
Header.defaultProps  = {
  hours : 10,
  minutes : 10,
  seconds : 10,
}
export default Header;
