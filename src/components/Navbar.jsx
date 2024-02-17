import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-slate-900'>
      {/* Left side */}
      <div className='flex items-center text-white' >
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 italic font-serif'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-sky-700 rounded-full p-1 text-[14px] ml-[20px]'>
          <p className='bg-slate-900 text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className='rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] bg-white focus:border-sky-800'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      {/* Cart button */}
      <button className='bg-slate-900 text-white hidden md:flex items-center py-2 rounded-full
       border-sky-700  border-2
       hover:scale-110  duration-700 hover:text-sky-700 '>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen text-white bg-slate-900 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-slate-900 z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav className='bg-slate-900'>
            <ul className='flex flex-col p-4  text-white'>
                <li className='text-xl py-4 flex hover:ml-5 duration-700 hover:text-sky-700'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex hover:ml-5 duration-700 hover:text-sky-700 '><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex hover:ml-5 duration-700 hover:text-sky-700 '><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex hover:ml-5 duration-700 hover:text-sky-700 '><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex hover:ml-5 duration-700 hover:text-sky-700 '><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex hover:ml-5 duration-700 hover:text-sky-700 '><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex hover:ml-5 duration-700 hover:text-sky-700 '><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
