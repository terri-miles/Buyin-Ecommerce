import React from 'react'
import Items from '../Components/Items'
import data from '../assets/data'

function RealtedProduct() {
  return (
    <div className='flex flex-col gap-[10px] h-[90vh] items-center'>
        <h1 className='text-[#171717] text-[28px] font-[600]'>Realted Products</h1>
        <hr className='w-[180px] h-[4px] rounded-[10px] bg-[#252525]'/>
        <div className='mt-[40px] flex gap-[30px]'>
            {data.map(item =>{
                return <Items key={item.id} data={item}/>
            })}
        </div>
    </div>
  )
}

export default RealtedProduct