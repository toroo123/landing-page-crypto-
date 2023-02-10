import React from 'react'
import logo from '../images/logo.png'
import {GrTwitter , GrYoutube} from 'react-icons/gr'
import {AiFillInstagram} from 'react-icons/ai'
import {SiDiscord} from 'react-icons/si'
export default function Footer() {
    
  return (
    <div className="footer">
        <div className='flex-col justify-center  border-b-2 border-[#FFFFFF]/25'>
            <div className='gradient-text'>
                <div className=' text-[48px] font-bold flex justify-center pb-8'>Get More Updates</div>
            </div>
            <div><p className='text-white text-[18px] font-semibold text-center'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks</p></div>
            <div className='input'>
                <input type="text" autoComplete='on'  placeholder='Your Email...' className='ml-10 text-[18px] w-[493px] outline-none'/>
                <button className='text-[16px] font-bold text-white bg-[#2F80ED] px-14 py-3 rounded-full  hover:bg-indigo-500 '>I'm In</button>
            </div>
        </div>
        <div className='flex mt-16 justify-between'>
            <div className='felx-col text-white'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo"  className='w-11 h-11 m-2'/>
                    <p className='flex text-[32px] font-bold px-2 font-sans'>ENDFT</p>
                </div>
                <div className='mt-5 w-[400px] h-[123px] space-y-4 text-[#FFFFFF]/70'>
                    <p>The leading NFT Marketplace on Ethereum Home </p>
                    <p>To the next generation of digital creators.</p>
                    <p>Discover the best NFT collections.</p>
                </div>
                <div className='flex gap-x-5 '>
                    <button className='hover:scale-125'><GrTwitter className='footer-icons'/></button>
                    <button className='hover:scale-125'><AiFillInstagram className='footer-icons'/></button>
                    <button className='hover:scale-125'><GrYoutube className='footer-icons'/></button>
                    <button className='hover:scale-125'><SiDiscord className='footer-icons'/></button>
                </div>
            </div>
            <div className='text-white flex w-[500px] justify-between'>
                <div>
                    <h1 className='text-[28px]'>Marketplace</h1>
                    <ul className='space-y-3 text-[#FFFFFF]/70 mt-5'>
                        
                        <li>Explore</li>
                        <li>Articls</li>
                        <li>How it works</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[28px]'>Links</h1>
                    <ul className='space-y-3 text-[#FFFFFF]/70 mt-5'>
                        <li>Token</li>
                        <li>API</li>
                        <li>Big Bounty</li>
                        <li>Become a partner</li>
                    </ul>
                </div>
            </div>
       </div>
        <div className='text-[#FFFFFF]/70 mt-8 text-center mb-16'> © 2023 Endft. All rights reserved.</div>
    </div>
  )
}
