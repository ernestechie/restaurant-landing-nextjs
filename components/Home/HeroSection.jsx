import heroCircle from '@/assets/banner-circle.svg';
import heroRect from '@/assets/banner-rect.svg';
import heroSideBg from '@/assets/heroSideBgIcon.svg';

import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Button, VecText } from '..';

const images = [
  'https://www.recipetineats.com/wp-content/uploads/2022/02/Chicken-Shawarma-Wrap_2-SQ.jpg',
  'https://www.recipetineats.com/wp-content/uploads/2016/04/Lemon-Bars_2.jpg',
  'https://www.recipetineats.com/wp-content/uploads/2014/11/Hot-Pepperoni-Pizza-Dip-2.jpg',
  'https://www.recipetineats.com/wp-content/uploads/2023/08/Haloumi-Fries_6.jpg',
];

const HeroSection = () => {
  return (
    <section className='py-24 h-screen relative'>
      <section className='grid grid-cols-1 lg:grid-cols-2 h-full p-8 md:p-16 gap-8'>
        <div className='h-full p-4 flex flex-col items-center justify-center lg:items-start text-white'>
          <VecText text={'Welcome to Restho'} />

          <h1 className='text-4xl sm:text-5xl text-center lg:text-left font-bold my-4 font-serif'>
            Find Your Best Healthy & Tasty Food
          </h1>
          <h2 className='text-center lg:text-left font-medium mb-4'>
            It is a long established fact that readers will be distracted with
            the content of a page
          </h2>
          <Button icon={<FiArrowUpRight />} text='Discover More' />
        </div>
        <div className='ml-32 hidden lg:block'>
          <div className='grid grid-cols-2 gap-2 w-[340px] h-[340px] rotate-45'>
            {images.map((el, index) => (
              <Image
                key={index}
                src={el}
                width={100}
                height={100}
                className='w-40 h-40 bg-red-500 rounded-lg'
                alt={el}
              />
            ))}
          </div>
        </div>
      </section>

      <Image
        src={heroSideBg}
        alt='Hero section side svg'
        className='absolute left-0 top-[25%]'
      />

      <Image
        src={heroRect}
        alt='Hero animated rectangle svg'
        className='absolute right-[50%] top-[20%] animate_bounce_1'
      />

      <Image
        src={heroCircle}
        alt='Hero animated circle svg'
        className='absolute right-[15%] top-[15%] animate_bounce_2'
      />

      <Image
        src={heroRect}
        alt='Hero animated rectangle svg'
        className='absolute right-[60%] bottom-[15%] animate_bounce_2'
      />
    </section>
  );
};

export default HeroSection;
