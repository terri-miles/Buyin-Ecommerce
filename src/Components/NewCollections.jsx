import React from 'react'
import Items from './Items'
import new_collection from '../assets/new_collections'

function NewCollections() {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-[70px]'>
        <h1 className='text-[#171717] text-[28px] font-[600] mt-10'>NEW COLLECTIONS</h1>
        <hr className='w-[180px] bg-[#252525] h-[4px] rounded-[10px]'/>
        <div className='grid grid-cols-4 gap-[30px] mt-[50px]'>
            {new_collection.map((item) => {
                return <Items key={item.id} data={item}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections