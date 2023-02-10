import React from 'react'
import logo from '../images/logo.png'
export default function Navbar() {
  return (
    <div >
        <nav>
            <div className='navbar'>
                <div className='flex items-center'>
                  <img src={logo} alt="logo"  className='w-11 h-11 m-2'/>
                  <p className='flex text-[32px] font-bold px-2 font-sans'>ENDFT</p>
                </div>
                <div className='menu'>
                  <button className='btn'>Marketplace</button>
                  <button className='btn'>Collection</button>
                  <button className='btn'>Community</button>
                  <button className='btn'>Create</button>
                  <button className='btn bg-[#6654F1]'>Connect Wallet</button>
                </div>
            </div>
        </nav>
    </div>
  )
}
