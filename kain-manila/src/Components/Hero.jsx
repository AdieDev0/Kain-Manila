import React from 'react';
import { motion } from 'framer-motion';
import Food from '../assets/FoodManila.jpeg';

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*Overlay with animated text*/}
            <motion.div 
                className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1 
                    className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    The <motion.span 
                        className='text-orange-500'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                    >
                        Best Filipino
                    </motion.span>
                </motion.h1>
                <motion.h1 
                    className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.span 
                        className='text-orange-500'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                    >
                        Foods
                    </motion.span> Delivered
                </motion.h1>
            </motion.div>
            
            {/*Regular image without animation*/}
            <img 
                className='w-full max-h-[500px] object-cover'
                src={Food} 
                alt="Filipino Food"
            />
        </div>
    </div>
  );
};

export default Hero;