import React, { useContext, useState } from 'react'

import {assets} from '../assets/assets/frontend_assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const {setShowSearch,getCartCount,navigate, token, setToken, setCartItems} = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    
  }

  return (
    <div className='sticky top-0 z-50 bg-white shadow'>
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <Link to='/'><img src={assets.logo} className='w-36' alt="logo"/></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
         
         <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
         </NavLink>
         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
         </NavLink>
         <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
         </NavLink>
         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
         </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
          <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt='' />

          <div className='group relative'>
          
              <img onClick={() => token ? null : navigate('/login')} className='w-5 min-w-5 cursor-pointer' src={assets.profile_icon} alt='' />
              
              {/* Dropdown Menu when only if we are logged in */}
  
              {token && 
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                 </div>
              </div>}
          </div>
          <Link to='/cart' className='relative'>
               <img src={assets.cart_icon} className='w-5 min-w-5 ' alt=''/>
               <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center text-xs leading-4 bg-black text-white aspect-square rounded-full test-[8px]'>{getCartCount()}</p>
          </Link>
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=''/>
      </div>

      {/* sidebar menu for small screen here we will use the dynamic className*/}
     <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-all duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>

  {/* Header */}
  <div className="flex items-center gap-4 p-4 border-b">
    <img 
      onClick={() => setVisible(false)} 
      className="h-4 rotate-180 cursor-pointer" 
      src={assets.dropdown_icon} 
      alt="" 
    />
    <p className="font-semibold text-lg">Menu</p>
  </div>

  {/* Options */}
  <div className="flex flex-col text-gray-700">

    <NavLink onClick={() => setVisible(false)} className="px-6 py-4 border-b hover:bg-gray-100 transition" to='/'>HOME </NavLink>

    <NavLink onClick={() => setVisible(false)} className="px-6 py-4 border-b hover:bg-gray-100 transition" to='/collection'>COLLECTION</NavLink>

    <NavLink onClick={() => setVisible(false)} className="px-6 py-4 border-b hover:bg-gray-100 transition" to='/about'>ABOUT</NavLink>

    <NavLink onClick={() => setVisible(false)} className="px-6 py-4 border-b hover:bg-gray-100 transition" to='/contact'>CONTACT</NavLink>

  </div>
  </div>
  </div>
      </div>
  )
}

export default Navbar
