import Image from 'next/image';
import React from 'react';

const images = [
  'https://www.recipetineats.com/wp-content/uploads/2014/11/Hot-Pepperoni-Pizza-Dip-2.jpg',
  'https://www.recipetineats.com/wp-content/uploads/2022/02/Chicken-Shawarma-Wrap_2-SQ.jpg',
  'https://www.recipetineats.com/wp-content/uploads/2016/04/Lemon-Bars_2.jpg',
  'https://www.recipetineats.com/wp-content/uploads/2023/08/Haloumi-Fries_6.jpg',
];

const Diagonal = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-2 w-full rotate-45'>
        {images.map((el, index) => (
          <Image
            key={index}
            src={el}
            width={100}
            height={100}
            className='w-40 h-40 bg-red-500 rounded-lg'
          />
        ))}
      </div>
    </div>
  );
};

export default Diagonal;
