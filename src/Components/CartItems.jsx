import React, { useContext } from 'react'
import remove_icon from '../assets/cart_cross_icon.png'
import { ShopContext } from '../Utils/ShopContextProvider'

function CartItems() {
    const {all_product, removeFromCart, cartItems, getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='my-[100px] mx-[140px]'>
        <div className='flex items-center gap-[75px] py-[20px] text-[#252525] text-[18px] font-[600]'>
            <p className='w-[12%]'>Products</p>
            <p className='w-[40%]'>Title</p>
            <p className='w-[12%]'>Price</p>
            <p className='w-[12%]'>Quantity</p>
            <p className='w-[12%]'>Total</p>
            <p className='w-[12%]'>Remove</p>
        </div>
        <hr className='border-none h-[3px] bg-[#e2e2e2]'/>
       {all_product.map((item) => {
            if(cartItems[item.id] > 0){
                return (
                    <div key={item.id}>
                        <div className='cartitems-format flex items-center gap-[75px] py-[20px] text-[#252525] text-[15px] font-[500]'>
                           <div className='w-[12%]'><img src={item.image} alt='' className='h-[70px] object-center w-[70px]' /></div>
                            <p className='w-[40%]'>{item.name}</p>
                            <p className='w-[12%]'>${item.new_price}</p>
                            <button className='w-[80px] h-[50px] border-[2px] border-[#ebebeb] bg-white '>{cartItems[item.id]}</button>
                            <p className='w-[12%]'>${item.new_price * cartItems[item.id]}</p>
                            <div className='w-[12%]' ><img className='block mx-auto cursor-pointer' src={remove_icon} onClick={() => removeFromCart(item.id)} alt=''/></div>
                        </div>
                    <hr />
                </div>
                )
            } return null
       })}
       <div className='flex my-[100px]'>
            <div className='flex-1 flex flex-col mr-[100px] gap-[40px]'>
                <h1 className='text-[24px] font-[600]'>Cart totals</h1>
                <div>
                    <div className='flex justify-between py-[15px]'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-[15px]'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-[15px]'>
                        <h3 className='text-[20px] font-[600]'>Total</h3>
                        <h3 className='text-[20px] font-[600]'>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='w-[262px] h-[50px] outline-none border-none bg-[#ff5a5a] text-white font-[600] cursor-pointer mx-auto'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex-1 font-[500]'>
                <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                <div className='w-[410px] h-[56px] mt-[15px] pl-[20px] bg-[#eaeaea] flex items-center justify-between'>
                    <input type='text' placeholder='Promo code' name='promocode' className='border-none outline-none bg-transparent w-[250px] h-[50px]'/>
                    <button className='w-[130px] h-[56px] bg-black text-white cursor-pointer'>Submit</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default CartItems