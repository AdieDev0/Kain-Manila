import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMenu } from "react-icons/lu";
import { GrSearch } from "react-icons/gr";
import { BiSolidCart } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { TbTruckDelivery, TbProgressHelp } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { PiRankingDuotone, PiShareFat } from "react-icons/pi";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left Side */}
      <div className='flex items-center'>
        <motion.div
          onClick={toggleNav}
          className='cursor-pointer'
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Menu"
        >
          <LuMenu size={30} />
        </motion.div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <GrSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search Food'
          aria-label='Search Food'
        />
      </div>
      {/* Cart Button */}
      <motion.button
        className='bg-black text-white hidden md:flex items-center py-2 rounded-full'
        whileTap={{ scale: 0.9 }}
      >
        <BiSolidCart size={25} className='mr-2' /> Cart
      </motion.button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : null}

      {/* Side Drawer Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: nav ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10'
      >
        <RiCloseFill
          onClick={toggleNav}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
          aria-label="Close Menu"
        />
        
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex items-center cursor-pointer'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><FaRegHeart size={25} className='mr-4' />Favorite</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><SlWallet size={25} className='mr-4' />Wallet</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><TbProgressHelp size={25} className='mr-4' />Help</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><GoPerson size={25} className='mr-4' />Promotion</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><PiRankingDuotone size={25} className='mr-4' />Best Ones</li>
            <li className='text-xl py-4 flex items-center cursor-pointer'><PiShareFat size={25} className='mr-4' />Invite Friends</li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}

export default Navbar;
