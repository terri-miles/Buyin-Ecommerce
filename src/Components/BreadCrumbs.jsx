import React from 'react'
import arrow_icon from '../assets/breadcrum_arrow.png';

function BreadCrumbs(props) {
    const {product} = props;
  return (
    <div className='flex items-center text-[#5e5e5e] text-[12px] uppercase font-[600] gap-[8px] mt-10 ml-[140px]'>
        HOME <img src={arrow_icon} alt='' className='w-[8px]'/> SHOP <img src={arrow_icon} alt='' className='w-[8px]'/> {product.category} <img src={arrow_icon} alt='' className='w-[8px]'/> {product.name}
    </div>
  )
}

export default BreadCrumbs