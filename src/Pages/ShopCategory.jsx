import React, { useContext } from 'react';
import { ShopContext } from '../Utils/ShopContextProvider';
import dropdown_icon from '../assets/dropdown_icon.png'
import Items from '../Components/Items'

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='ShopCategory'>
      <img src={props.banner} alt='' className='w-[82%] block my-[30px] mx-auto'/>
      <div className='flex justify-between items-center mx-[170px] mt-[50px]'>
        <p>
          <span className='font-[600]'>Showing 1-12</span> out of 36 products
        </p>
        <div className='py-[10px] px-[20px] border border-[#888] rounded-[40px] flex items-center gap-3'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='my-[30px] mx-[115px] grid grid-cols-4 gap-[30px]'>
        {all_product.map(item =>{
          if (props.category === item.category) {
            return <Items key={item.id} data={item} />
          } else {
            return null
          }
        })}
      </div>
      <div className='flex justify-center items-center mx-auto my-[100px] w-[233px] h-[55px] bg-[#ededed] text-[#787878] rounded-[75px] text-[18px] font-[500]'>
        Load More
      </div>
    </div>
  )
}

export default ShopCategory