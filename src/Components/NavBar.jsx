import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png';
import Cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Utils/ShopContextProvider';

function Navbar() {
    const { getTotalItem } = useContext(ShopContext)
    const[menu, setMenu] = useState('shop');
  return (
    <div className='flex justify-around items-center p-[16px] shadow'>
        <div className='flex items-center gap-2'>
            <img src={logo} className='w-[45px]' alt=''/>
            <Link to='/'><p className='text-[24px] text-green-700 font-bold cursor-pointer'>BuyIn</p></Link>
        </div>
        <ul className='flex items-center gap-8 text-[13px]'>
            <li onClick={() => setMenu('shop')} className='text-gray-400 font-medium cursor-pointer'><Link to='/'>Shop</Link>{menu === 'shop' ? <hr className='w-80% h-[3px] bg-[#ff4141] rounded-md border-none mt-1'/>:<></> }</li>
            <li onClick={() => setMenu('men')} className='text-gray-400 font-medium cursor-pointer'><Link to='/men'>Men</Link>{menu === 'men' ? <hr className='w-80% h-[3px] bg-[#ff4141] rounded-md border-none mt-1'/>:<></> }</li>
            <li onClick={() => setMenu('women')} className='text-gray-400 font-medium cursor-pointer'><Link to='women'>Women</Link>{menu === 'women' ? <hr className='w-80% h-[3px] bg-[#ff4141] rounded-md border-none mt-1'/>:<></> }</li>
            <li onClick={() => setMenu('kids')} className='text-gray-400 font-medium cursor-pointer'><Link to='/kids'>Kids</Link>{menu === 'kids' ? <hr className='w-80% h-[3px] bg-[#ff4141] rounded-md border-none mt-1'/>:<></> }</li>
        </ul>
        <div className='flex items-center gap-3'>
            <Link to='login'><button className='w-[90px] h-[40px] text-[14px] text-[#515151] border-solid border-2 border-[#7a7a7a] rounded-full font-normal cursor-pointer active:bg-[#f3f3f3]'>Login</button></Link>
            <Link to='cart'><img src={Cart_icon} alt='' className='w-[30px] cursor-pointer'/></Link>
            <div className='flex justify-center items-center mt-[-23px] ml-[-18px] w-[20px] h-[20px] rounded-xl text-[10px] text-white bg-red-600'>{getTotalItem()}</div>
        </div>
    </div>
  )
}

export default Navbar