import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

function Offers() {
  return (
    <div className='w-[80%] h-[60vh] flex mt-6 mb-4 pl-[100px] pr-[100px] bg-gradient-to-br from-[#fde1ff] from-40% to-[#e1ffea22] to-90% mx-auto'>
        <div className='flex-1 flex flex-col justify-center'>
            <h1 className='text-[#171717] text-[55px] font-bold'>Exclusive</h1>
            <h1 className='text-[#171717] text-[55px] font-bold mt-[-10px]'>Offers For You</h1>
            <p className='text-[#171717] text-[16px] font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='bg-[#ff4141] w-[200px] h-[45px] mt-[20px] text-white rounded-[35px] cursor-pointer'>Check Now</button>
        </div>
        <div className='flex-1 flex items-center justify-items-end pt-[40px] overflow-hidden mr-[-200px]'>
            <img src={exclusive_image} className='w-[260px]'/>
        </div>
    </div>
  )
}

export default Offers