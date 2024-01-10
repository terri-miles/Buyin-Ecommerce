import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinetrest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] mt-[80px]'>
        <div className='flex items-center gap-[10px]'>
            <img src={footer_logo} className='w-[60px]'/>
            <p className='text-[32px] text-green-700 font-[700]'>BuyIn</p>
        </div>
        <ul className='flex list-none gap-[40px] text-[#252525] text-[14px] font-medium'>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className='flex gap-[20px]'>
            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                <img src={instagram_icon} className='w-[18px]'/>
            </div>
            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                <img src={pinetrest_icon} className='w-[18px]'/>
            </div>
            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                <img src={whatsapp_icon} className='w-[18px]'/>
            </div>
        </div>
        <div className='flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[14px] font-bold'>
            <hr className='w-[80%] rounded-[10px] h-[3px] bg-[#c7c7c7] border-none'/>
            <p>Copyright @ 2023 - All</p>
        </div>
    </div>
  )
}

export default Footer