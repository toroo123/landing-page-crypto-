import React from 'react'
import {CiWallet,CiViewList} from 'react-icons/ci'
import {TbFileUpload} from 'react-icons/tb'
export default function CreateSell() {
  return (
    <div className='create_sell'>
        <div className='create_box'>
          <div className='gradient-text'>
                <div className=' text-[48px] font-bold flex justify-center pb-8'>Create and sell your NFTs</div>
          </div>
          <div className='create_box_items_list'>
            <div className='create_box_items'>
              <div className='text-white '>
                <CiWallet className='w-[60px] h-[60px]'/>
              </div>
              <h1 className='create_box_items_title'>Set up your wallet</h1>
              <p className='create_box_items_text'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
            </div>
            <div className='create_box_items'>
              <div className='text-white '>
                <TbFileUpload className='w-[55px] h-[60px] '/>
              </div>
              <h1 className='create_box_items_title'>Upload & Create Collection</h1>
              <p className='create_box_items_text'>Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
            </div>
            <div className='create_box_items'>
              <div className='text-white '>
                <CiViewList className='w-[50px] h-[60px]'/>
              </div>
              <h1 className='create_box_items_title'>List them for sale</h1>
              <p className='create_box_items_text'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
