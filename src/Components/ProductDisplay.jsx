import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../Utils/ShopContextProvider'

function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContext);
  const {product} = props;

    const handleCart = (e) =>{
        addToCart(product.id);
        window.scrollTo(0,0);
    }

  return (
    <div className='flex mx-[160px] mt-[50px]'>
      <div className='flex gap-[17px]'>
        <div className='flex flex-col gap-[16px]'>
          <img src={product.image} alt='' className='h-[120px] w-[120px] object-center'/>
          <img src={product.image} alt='' className='h-[120px] w-[120px] object-center'/>
          <img src={product.image} alt='' className='h-[120px] w-[120px] object-center'/>
          <img src={product.image} alt='' className='h-[120px] w-[120px] object-center'/>
        </div>
        <div className='w-[500px] h-[530px]'>
          <img src={product.image} alt='' className='w-full h-full object-center'/>
        </div>
      </div>
      <div className='flex flex-col mx-[30px]'>
        <h1 className='text-[#3d3d3d] text-[25px] font-[700]'>{product.name}</h1>
        <div className='flex items-centert mt-[10px] gap-[5px] text-[#1c1c1c]'>
          <img src={star_icon} alt=''/>
          <img src={star_icon} alt=''/>
          <img src={star_icon} alt=''/>
          <img src={star_icon} alt=''/>
          <img src={star_dull_icon} alt=''/>
          <p>(122)</p>
        </div>
        <div className='flex my-[20px] gap-[20px] text-[24px] font-[700] items-baseline'>
          <div className='text-[#ff4141]'>${product.new_price}</div>
          <div className='text-[#818181] line-through text-[18px]'>${product.old_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          A lightweight, usually knitted, pullover shirt, close fitting and with a round neckline and short sleeves, worn as an undershirt or outergarment.
        </div>
        <div className='productdisplay-right-sizes'>
          <h1 className='mt-[20px] text-[#656565] text-[18px] font-[600]'>Select Size</h1>
          <div className='flex my-[20px] gap-[20px]'>
            <div className='py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>S</div>
            <div className='py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>M</div>
            <div className='py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>L</div>
            <div className='py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XL</div>
            <div className='py-[12px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] rounded-[3px] cursor-pointer'>XXL</div>
          </div>
        </div>
        <button onClick={handleCart} className='py-[12px] px-[30px] w-full text-[14px] font-[600] text-white bg-[#ff4141] mb-[30px] border-none outline-none cursor-pointer mt-[8px]'>ADD TO CART</button>
        <p className='text-[12px]'><span className='font-[600]'>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className='text-[12px] mt-[3px]'><span className='font-[600]'>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay