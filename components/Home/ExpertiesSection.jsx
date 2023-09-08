import chef1 from '@/assets/chef-1.png';
import chef2 from '@/assets/chef-2.png';
import chef3 from '@/assets/chef-3.png';
import { social_links } from '@/public/data';
import Image from 'next/image';
import React from 'react';
import { VecText } from '..';

const chefs = [
  { name: 'Mr. John Doe', body: 'Chef of Head', image: chef3 },
  { name: 'Mrs. Jane Doe', body: 'Chef of Head', image: chef2 },
  { name: 'Mr. John Smith', body: 'Chef of Head', image: chef1 },
];

const ExpertiesSection = () => {
  return (
    <section className='bg-white p-4 sm:p-8 py-16 md:px-12 xl:p-24'>
      <div className='flex items-center justify-center'>
        <VecText text='Our Experties' />
      </div>
      <p className='font-bold text-title-dark text-4xl text-center font-serif sm:text-5xl my-4 lg:text-6xl'>
        Restho's Best Chef
      </p>

      <div className='grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
        {chefs.map((chef, index) => (
          <div
            key={chef.title}
            className='relative w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden max-h-[512px] border border-gray-200 menu-item'
          >
            <div className='overflow-hidden'>
              <Image
                className='w-full h-56 hover:scale-105 duration-500'
                src={chef.image}
                alt={chef.body}
                width={300}
                height={300}
              />
            </div>

            <div className='p-4 py-6'>
              <p className='capitalize font-serif font-bold text-2xl text-title-dark text-center'>
                {chef.name}
              </p>
              <p className='my-2 text-center text-text-1 text-sm'>
                {chef.body}
              </p>

              <ul className='mt-2 flex items-center justify-center gap-4 mx-auto'>
                {social_links.map((link) => (
                  <li key={link.url}>
                    <a
                      target='_blank'
                      href={link.url}
                      className='rounded-full w-8 h-8 text-text-1 hover:text-primary duration-500 flex items-center justify-center before:h-1 before:w-1 before:bg-text-light before:rounded-full before:mr-2 hover:before:bg-primary before:duration-500'
                    >
                      <span className='text-xl'>{link.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiesSection;
