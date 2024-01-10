import React from 'react'

function LoginSignup() {
  return (
    <div className='w-[100%] h-[120vh] bg-[#fce3fe] flex justify-center items-center'>
      <div className='w-[580px] bg-white mx-auto py-[40px] px-[60px]'>
        <h1 className='my-[20px] text-[32px] font-[500]'>Sign up</h1>
        <div className='flex flex-col gap-[25px] mt-[20px]'>
          <input type='text' placeholder='Your Name' className='h-[50px] w-full pl-[20px] border border-[#c9c9c9] text-[#5c5c5c] outline-none'/>
          <input type='email' placeholder='Your Email' className='h-[50px] w-full pl-[20px] border border-[#c9c9c9] text-[#5c5c5c] outline-none'/>
          <input type='password' placeholder='Password' className='h-[50px] w-full pl-[20px] border border-[#c9c9c9] text-[#5c5c5c] outline-none'/>
        </div>
        <button className='w-full h-[50px] text-white bg-[#ff4141] mt-[35px] border-none font-[500] cursor-pointer'>Continue</button>
        <p className='mt-[20px] text-[#5c5c5c] font-[500]'>Already have an account? <span className='text-[#ff4141] font-[600]'>Login here</span></p>
        <div className='flex items-center mt-[20px] gap-[15px] text-[#5c5c5c] font-[500] text-[12px]'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup