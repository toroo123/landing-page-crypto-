import React from 'react'
import img1 from '../images/meta.png'
import img2 from '../images/trust.png'
import img3 from '../images/wallet.png'
import img4 from '../images/exodos.png'
import img5 from '../images/binance.png'
export default function Wallet_Support() {
  return (
    <div>
      <div className='wallet'>
        <div className='wallet_support'>
          <div className='wallet_items'>
            <div>
              <img src={img1} alt="" className='w-[60px] h-[60px]'/>
            </div>
            <p className='wallet_text' font-medium>MetaMask</p>
          </div>
          <div className='wallet_items ml-[16px]'>
            <div>
              <img src={img2} alt="" className='w-[60px] h-[60px]'/>
            </div>
            <p className='wallet_text'>Trust Wallet</p>
          </div>
          <div className='wallet_items ml-[16px]'>
            <div>
              <img src={img3} alt="" className='w-[60px] h-[60px]'/>
            </div>
            <p className='wallet_text'>Wallet Connect</p>
          </div>
          <div className='wallet_items ml-[16px]'>
            <div>
              <img src={img4} alt="" className='w-[60px] h-[60px]'/>
            </div>
            <p className='wallet_text'>Exodos</p>
          </div>
          <div className='wallet_items ml-[16px]'>
            <div>
              <img src={img5} alt="" className='w-[60px] h-[60px]'/>
            </div>
            <p className='wallet_text'>Binance</p>
          </div>
        </div>
      </div>
    </div>
  )
}
