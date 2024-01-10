import React from 'react'

function Newsletter() {
  return (
    <div className='w-[80%] h-[50vh] flex flex-col justify-center items-center mx-auto mt-6 mb-10 bg-gradient-to-br from-[#fde1ff] from-40% to-[#e1ffea22] to-90%'>
        <h1 className='text-[#454545] text-[40px] font-[600]'>Get Exclusive Offers On Your Email</h1>
        <p className='text-[#454545]'>Subscribe to our newsletter and stay updated</p>
        <div className='flex justify-between items-center bg-white w-[500px] h-[50px] rounded-[80px] mt-7 border border-[#e3e3e3]'>
            <input type='email' placeholder='Your Email id' className='w-[60%] border-none outline-none text-[#616161] ml-[20px]'/>
            <button className='w-[30%] h-[50px] rounded-[80px] bg-[black] text-white cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter