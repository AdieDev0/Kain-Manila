import React, { useState } from 'react';
import { data } from '../Data/data.js';

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter by type (Breakfast, Beverage, etc.)
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-black font-bold text-4xl text-center mb-8'>Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between mb-8'>

        {/* Filter Type */}
        <div className='mb-4 lg:mb-0'>
          <p className='font-bold text-gray-700 mb-2'>Filter Type</p>
          <div className='flex flex-wrap'>
            <button onClick={() => setFoods(data)} className='m-1 border            border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>All</button>
            <button onClick={() => filterType('Breakfast')} className='m-1 border   border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>Breakfast</button>
            <button onClick={() => filterType('Beverage')} className='m-1 border    border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>Beverage</button>
            <button onClick={() => filterType('Seafood')} className='m-1 border     border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>Seafood</button>
            <button onClick={() => filterType('Desserts')} className='m-1 border    border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>Desserts</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
          <div className='flex'>
            <button onClick={() => filterPrice('$')} className='m-1 border    border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>$</button>
            <button onClick={() => filterPrice('$$')} className='m-1 border   border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='m-1 border  border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='m-1 border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-3 py-1 rounded'>$$$$</button>
          </div>
        </div>
      </div>

      {/* Display Food */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 transform transition duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-red-500 text-white p-1 rounded-full'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
