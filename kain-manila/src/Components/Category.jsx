import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../Data/data';

const Category = () => {
  // Container animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Delay between each child animation
      }
    }
  };

  // Item animation variant
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <motion.h1 
        className='text-black font-bold text-4xl text-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Top Rated Menu Items
      </motion.h1>

      {/* Categories */}
      <motion.div 
        className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((item, index) => (
          <motion.div 
            key={index} 
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-105 transition-transform duration-300'
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Category;