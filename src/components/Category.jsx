import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 bg-slate-900'>
      <h1 className='text-sky-600 font-bold text-4xl text-center italic font-serif'>
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-sky-700 text-white rounded-lg p-4 flex justify-between items-center'
          >
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-[100px] h-[100px]  p-2 bg-slate-900 rounded-full 
            hover:-translate-y-3 duration-700' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
