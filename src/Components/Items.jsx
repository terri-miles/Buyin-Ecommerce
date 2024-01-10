import React from 'react'
import { Link } from 'react-router-dom'

function Items(props) {
    const {id,name, image, new_price, old_price} = props.data
  return (
    <div className='w-[230px] hover:scale-[1.05] duration-[700ms]'>
        <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt=''/></Link>
        <p className='ml-[6px] mt-[8px] leading-normal text-[14px] font-semibold'>{name}</p>
        <div className='flex gap-[15px] ml-[6px] mt-[px] items-baseline'>
            <div className='text-[#ff4141] text-[16px] font-[600]'>${new_price}</div>
            <div className='text-[#8c8c8c] text-[12px] line-through'>{old_price}</div>
        </div>
    </div>
  )
}

export default Items