import React from 'react'
import top1 from '../images/top1.png'
import top2 from '../images/top2.png'
import top3 from '../images/top3.png'
import top4 from '../images/top4.png'
import top5 from '../images/top5.png'
import top6 from '../images/top6.png'
import top7 from '../images/top7.png'
import top8 from '../images/top8.png'
// import background from '../images/BACKGROUND.png'
export default function Collection() {
    let data = [
        {
            id : 1,
            img : top1,
            name : "cvltB3AR",
            lname : "CVLTBEAR",
            latestPrice : "0.88 ETH",
            latestText : "Floor price",
            price : "$ 545",
            precent : "+12.15%"
        },
        {
            id : 2,
            img : top2,
            name : "COOLGUYZZ",
            lname : "Coolguyzz.io",
            latestPrice : "1.5 ETH",
            latestText : "Floor price",
            price : "$ 2045.3",
            precent : "-12.15%"
        },
        {
            id : 3,
            img : top3,
            name : "gangstaboi v.1",
            lname : "GB_Gangs",
            latestPrice : "2.53  ETH",
            latestText : "Floor price",
            price : "$ 4486",
            precent : "+34.5%"
        },
        {
            id : 4,
            img : top4,
            name : "HyperApe",
            lname : "HyperApe.co",
            latestPrice : "1.31 ETH",
            latestText : "Floor price",
            price : "$ 1743.3",
            precent : "-5.63%"
        },
        {
            id : 5,
            img : top5,
            name : "Lyodd$1",
            lname : "Naomi Po",
            latestPrice : "1.156 ETH",
            latestText : "Floor price",
            price : "$ 1670",
            precent : "+12.15%"
        },
        {
            id : 6,
            img : top6,
            name : "Azuki 3D",
            lname : "AZUKI.JP",
            latestPrice : "1.5 ETH",
            latestText : "Floor price",
            price : "$ 1907",
            precent : "+1.6%"
        },
        {
            id : 7,
            img : top7,
            name : "CuteApe White",
            lname : "CuteApe_99",
            latestPrice : "0.045  ETH",
            latestText : "Floor price",
            price : "$ 245.6",
            precent : "-14.15%"
        },
        {
            id : 8,
            img : top8,
            name : "SneakerHead Vol.1",
            lname : "SneakerHead.Corp",
            latestPrice : "1.4 ETH",
            latestText : "Floor price",
            price : "$ 1790",
            precent : "+67.15%"
        }
    ]
  return (
    <div className='collection'>
        
        <div className='gradient-text'>
            <div className=' text-[48px] font-bold flex justify-center pb-8'>Top Collections</div>
        </div>
        <div className='collection_list'>
            <button className='btn1'>Art</button>
            <button className='btn1'>Collectibles</button>
            <button className='btn1'>Metaverse</button>
            <button className='btn1'>Virtual Worlds</button>
            <button className='btn1'>Sports</button>
            <button className='btn1'>Music</button>
        </div>
        <div className='top_collection'>
            {data.map((state) => (
                <div className='card-list-collection'>
                    <div className='card-collection'>
                        <img src={state.img} alt="" />
                        <div className='text-white'>
                            <h1 className='text-[18px] font-semibold'>{state.name}</h1>
                            <p className='text-[12px]'>{state.lname}</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-white'>
                                <h1 className='text-[18px] font-semibold'>{state.latestPrice}</h1>
                                <p className='text-[12px]'>{state.latestText}</p>
                            </div>
                            <div className='justify-end'>
                                <h1 className='text-[18px] font-semibold text-white'>{state.price}</h1>
                                <p className='text-[12px] text-[#24FF00] text-right'>{state.precent}</p>
                            </div>
                        </div>
                    </div>
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
