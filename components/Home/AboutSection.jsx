import about1 from '@/assets/about1.svg';
import about2 from '@/assets/about2.svg';
import { menu_data } from '@/public/data';
import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Button, VecText } from '..';
import Diagonal from '../Global/Diagonal';

const AboutSection = () => {
  return (
    <section className='bg-white py-16 md:px-12 xl:p-24'>
      {/* Slider - Food Menu */}
      <div className='p-4 flex overflow-hidden items-center justify-between gap-8 mx-auto'>
        {menu_data.map((data, index) => (
          <div
            key={data.title}
            className={`flex-none w-full max-w-[320px] p-6 relative border border-gray-200 rounded-md pl-32 mx-auto ml-8 scrolling-container delay-${
              index * 500
            }`}
          >
            <p className='font-serif capitalize text-xl font-bold'>
              {data.title}
            </p>
            <p className='text-[15px]'>{data.body}</p>

            <Image
              src={data.image}
              alt={data.body}
              width={100}
              height={100}
              className='w-36 h-36 bg-black absolute rounded-full -top-[8%] -translate-y-[30%] -left-8 spinning-element'
            />
          </div>
        ))}
      </div>

      <div className='mt-24'>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full p-4 sm:p-8 md:p-16'>
          <div className='mx-auto mb-16'>
            <Diagonal />
          </div>
          <div className='p-4 mt-8 lg:mt-0'>
            <VecText text='About Restho' />
            <h3 className='text-title-dark text-4xl sm:text-5xl font-bold my-4 font-serif'>
              Come to Our Restaurant, Ready Your Food.
            </h3>
            <h4 className='text-text-1 mb-4 leading-7'>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h4>

            <div className='my-8 flex flex-col sm:flex-row lg:flex-col gap-8'>
              <div className='flex gap-4'>
                <Image
                  src={about1}
                  alt='pure fresh food'
                  className='w-16 h-16 p-2 rounded-md border border-primary'
                />

                <div>
                  <p className='font-serif text-title-dark text-xl font-bold md:text-2xl'>
                    Pure Fresh Food.
                  </p>
                  <p className='text-text-1'>
                    We are serve different type of fresh food.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <Image
                  src={about2}
                  alt='expertise chef'
                  className='w-16 h-16 p-2 rounded-md border border-primary'
                />

                <div>
                  <p className='font-serif text-title-dark text-xl font-bold md:text-2xl'>
                    Expertise Chef.
                  </p>
                  <p className='text-text-1'>
                    We are serve different type of fresh food.
                  </p>
                </div>
              </div>
            </div>

            <Button
              icon={<FiArrowUpRight />}
              text='Discover More'
              url='/about'
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
