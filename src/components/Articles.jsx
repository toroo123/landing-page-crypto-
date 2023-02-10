import React from 'react'
import article1 from '../images/article1.png'
import article2 from '../images/article2.png'
import article3 from '../images/article3.png'
export default function Articles() {
    let data = [
        {
            id : 1,
            img : article1,
            footer : "We've lowered marketplace fees on all your favorite NFTs",
            date : "January 23, 2022"
        },
        {
            id : 2,
            img : article2,  
            footer : "Your Ultimate Guide to Getting Started With NFTs on Rarible",
            date : "January 23, 2022"
        },
        {
            id : 3,
            img : article3,
            footer : "Why Community Marketplaces are the future of NFT trading",
            date : "January 23, 2022"
        }
    ]
  return (
    <div className='article' >
        <div className='gradient-text'>
               <div className=' text-[48px] font-bold flex justify-center pb-8'>Article</div>
         </div>
         <div className='flex  justify-between w-full pt-10'>
            {data.map((state) => (
                <div className='article_card'>
                    <img src={state.img} alt="" className='w-[390px] h-[260px]'/>
                    <h1 className='text-white text-[22px] px-6 pt-4 font-semibold'>{state.footer}</h1>
                    <p className='text-white px-6 pt-1 pb-8 text-[12px]'>{state.date}</p>
                </div>

            ))

            }
         </div>
         <div className='flex justify-center py-8'>
            <button className='see_button'>See more</button>
        </div>
        
    </div>
  )
}
