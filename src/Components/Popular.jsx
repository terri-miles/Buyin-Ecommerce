import React from 'react'
import data_product from '../assets/data'
import Items from './Items'

function Popular() {
  return (
    <div className='flex flex-col items-center gap-[10px] h-[100vh]'>
        <h1 className='text-[#171717] text-[28px] font-[600] mt-10'>POPULAR IN WOMEN</h1>
        <hr className='w-[180px] bg-[#252525] h-[4px] rounded-[10px]'/>
        <div className='flex gap-[30px] mt-[50px]'>
            {data_product.map((item) =>{
                return <Items key={item.id} data={item}/>
            })}
        </div>
    </div>
  )
}

export default Popular