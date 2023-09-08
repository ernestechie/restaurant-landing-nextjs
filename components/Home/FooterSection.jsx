import header1Logo from '@/assets/header1-logo.svg';
import subTitleVec from '@/assets/sub-title-vec.svg';
import { social_links as links } from '@/public/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterSection = () => {
  return (
    <footer className='p-8 footer-section  py-16 md:px-12 xl:p-24'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center'>
        <div className='col-span-1 lg:col-span-2 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:justify-around '>
          <div className='p-8 rounded-full border border-text-1 w-80 h-80 flex items-center justify-center flex-col gap-4'>
            <Image
              src={header1Logo}
              width={100}
              height={100}
              className='w-44'
            />

            <p className='font-bold text-xl text-text-light '>
              Established . 2022
            </p>

            <div className='flex items-center gap-4'>
              <span className='block w-20 h-[1px] bg-primary'></span>
              <Image
                src={subTitleVec}
                width={100}
                height={100}
                className='w-6'
              />
              <span className='block w-20 h-[1px] bg-primary'></span>
            </div>

            <div className='mt-2 flex items-center gap-4'>
              {links.map((link) => (
                <a
                  key={link.url}
                  target='_blank'
                  href={link.url}
                  className='p-2 rounded-full w-8 h-8 border border-primary text-white hover:bg-primary duration-500 flex items-center justify-center'
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <p className='text-white font-serif text-2xl font-bold mb-8'>
              Our Facilities
            </p>

            <ul className='grid grid-cols-2 gap-4'>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
                <li
                  key={el}
                  className={`duration-500 footer-list-item hover:text-primary flex items-center gap-2 ${
                    el % 2 === 0 ? 'ml-4' : 'ml-0'
                  }`}
                >
                  <span className='block w-5 h-[1px] bg-primary'></span>
                  <Link
                    className={`text-text-light hover:text-primary duration-500`}
                    href={`/link-${el}`}
                  >
                    Food Link {el}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-span-1 mx-auto mt-8 lg:mt-0'>
          <p className='text-white font-serif text-2xl font-bold mb-8 text-center lg:text-left'>
            Address Info
          </p>
          <p className='text-[17px] mb-2 text-center lg:text-left'>
            <span className='text-primary font-bold'>Phone:</span>
            <a href='tel:+2349055355357' className=' text-text-light ml-4'>
              +2349055355357
            </a>
          </p>
          <p className='text-[17px]  mb-2 text-center lg:text-left'>
            <span className='text-primary font-bold'>Email:</span>
            <a
              href='mailto:officialisaiahovie@gmail.com'
              className=' text-text-light ml-4'
            >
              officialisaiahovie@gmail.com
            </a>
          </p>
          <p className='text-[17px]  mb-2 text-center lg:text-left'>
            <span className='text-primary font-bold'>Fax ID:</span>
            <a href='tel:+2347064345065' className=' text-text-light ml-4'>
              +2347064345065
            </a>
          </p>
          <p className='text-[17px] mb-2 text-center lg:text-left'>
            <span className='text-primary font-bold'>Location:</span>
            <a href='tel:+2347064345065' className=' text-text-light ml-4'>
              Yenagoa, Bayelsa, Nigeria.
            </a>
          </p>
        </div>
      </div>

      <span className='block w-full h-[1px] bg-text-1 mt-32'></span>
      <div className='pt-4 flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <p className='text-text-light'>
          @Copyright by Egenslab-2023, All Right Reserved.
        </p>
        <div className='text-text-light'>
          <Link href='/' className='hover:text-primary duration-500 mx-2'>
            Privacy & Policy
          </Link>
          |
          <Link href='/' className='hover:text-primary duration-500 mx-2'>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
