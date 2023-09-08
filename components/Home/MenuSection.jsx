import { menu_data } from '@/public/data';
import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Button, VecText } from '..';

const MenuSection = () => {
  return (
    <section className='bg-white p-4 sm:p-8 py-16 md:px-12 xl:p-24'>
      <VecText text='Menu List' />

      <div className='md:flex md:items-center md:justify-between my-6'>
        <h5 className='font-serif font-bold text-4xl md:text-5xl text-title-dark mb-4'>
          Find Your Food Item
        </h5>

        <Button text='View More' icon={<FiArrowUpRight />} />
      </div>

      <div className='grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
        {menu_data.map((meal, index) => (
          <div
            key={meal.title}
            className='relative w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden max-h-[512px] border border-gray-200 menu-item'
          >
            <span className='absolute top-4 right-0 bg-white py-1 px-6 rounded-tl-full rounded-bl-full text-title-dark font-semibold capitalize font-serif text-xl'>
              Launch
            </span>

            <Image
              className='w-full h-56'
              src={meal.image}
              alt={meal.body}
              width={300}
              height={300}
            />

            <span className='p-2 px-4 bg-white border border-gray-50 right-[45%] top-[55%] translate-x-[25%] absolute font-bold text-primary rounded-full'>
              NGN{index === 0 ? 3500 : index * 2500}
            </span>

            <div className='h-full p-4 py-8'>
              <p className='capitalize font-serif font-bold text-2xl text-title-dark text-center'>
                {meal.title}
              </p>
              <p className='text-center text-text-1'>{meal.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
