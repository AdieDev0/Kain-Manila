import React from 'react';
import { motion } from 'framer-motion';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Cards */}
      <motion.div
        className='rounded-xl relative'
        whileHover={{ scale: 1.05 }}
      >
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://cdn.tasteatlas.com//images/dishes/a093a8930f4f4e8e8bb7237998a54957.jpg?w=905&h=510'
          alt='/'
        />
      </motion.div>

      <motion.div
        className='rounded-xl relative'
        whileHover={{ scale: 1.05 }}
      >
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://cdn.tasteatlas.com//Images/Dishes/e00d7c64b17d4f08938abc4b0d3d65ff.jpg?w=905&h=510'
          alt='/'
        />
      </motion.div>

      <motion.div
        className='rounded-xl relative'
        whileHover={{ scale: 1.05 }}
      >
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
          <p className='px-2'>Sweet Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://cdn.tasteatlas.com//Images/Dishes/f811557b0f4942269a4719f3df635d7f.jpg?w=905&h=510'
          alt='/'
        />
      </motion.div>
    </div>
  );
};

export default HeadlineCards;
