import logo1 from '@/assets/header1-logo.svg';
import { links } from '@/public/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { Button } from '..';

const MobileNav = ({ showNav, closeNav }) => {
  return (
    <aside
      className={`block lg:hidden fixed top-0 left-0 w-full h-screen z-50 -translate-x-[100%] duration-500 ${
        showNav ? 'translate-x-0' : '-translate-x-[100%]'
      }`}
    >
      <div className='w-full max-w-[300px] bg-title-dark p-6 py-8 duration-500 h-full'>
        <div className='flex items-center justify-between'>
          <Image src={logo1} alt='Mobile nav logo' />
          <button title='Close Mobile Nav' onClick={closeNav}>
            <AiOutlineClose className='text-white font-bold text-xl' />
          </button>
        </div>

        <ul className='mt-16'>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                id={link.id}
                className='text-lg text-text-light capitalize font-semibold hover:text-primary duration-500 flex justify-between items-center my-3'
              >
                <span>{link.name}</span>
                <AiOutlinePlus />
              </Link>
            </li>
          ))}
        </ul>

        <div className='mt-16'>
          <div className='my-4 flex items-center gap-4'>
            <span className='p-3 rounded-full border border-primary text-primary'>
              <FiPhoneCall className='text-2xl' />
            </span>

            <div>
              <p className='text-primary'>Call Now</p>
              <a
                href='tel:+234-9055355357'
                className='font-medium text-white text-lg'
              >
                +234-9055355357
              </a>
            </div>
          </div>
          <Button
            text='Find Reservation'
            styles='bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary'
          />
        </div>
      </div>
    </aside>
  );
};

export default MobileNav;
