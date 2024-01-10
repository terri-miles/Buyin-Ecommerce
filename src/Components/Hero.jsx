import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

function Hero() {
  return (
    <>
    <div className='h-screen flex bg-gradient-to-br from-[#fde1ff] from-40% to-[#e1ffea22] to-90%'>
      <div className='flex-1 flex flex-col justify-center gap-4 pl-[135px] leading-tight'>
        <h2 className='text-[#090909] text-[18px] font-medium'>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='flex items-center gap-4'>
            <p className='text-[60px] text-[#171717] font-bold'>New</p>
            <img src={hand_icon} className='w-[80px]'/>
          </div>
          <p className='text-[#171717] text-[60px] font-[700]'>collections</p>
          <p className='text-[#171717] text-[60px] font-[700]'>for everyone</p>
        </div>
        <div className='flex justify-center items-center gap-4 w-[260px] h-[50px] rounded-[50px] mt-4 bg-[#ff4141] text-white text-[18px] font-medium'>
          <div>Latest Collections</div>
          <img src={arrow_icon} className='w-[20px]'/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={hero_image} className='w-[400px] mr-4'/>
      </div>
    </div>
    </>
  )
}

export default Hero