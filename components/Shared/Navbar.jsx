import headerLogo2 from '@/assets/header2-logo.svg';
import { links } from '@/public/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { NavLinkPopup } from '..';

const Navbar = () => {
  const [sublinkToShow, setSublinkToShow] = useState(0);

  const toggleSublinks = (id) => setSublinkToShow(id);

  return (
    <nav className='shadow-xl bg-white max-container p-6 rounded-full fixed top-12 px-8 left-[50%] -translate-x-[50%] flex items-center justify-between md:px-12 z-50'>
      <Image src={headerLogo2} className='max-w-[160px]' />

      {/* Navlinks */}
      <ul className='hidden lg:flex items-center gap-4 text-lg'>
        {links.map((link) => (
          <li
            key={link.name}
            className='relative'
            onMouseEnter={() => toggleSublinks(link.id)}
            onMouseLeave={() => toggleSublinks(0)}
          >
            <Link
              href={link.url}
              className='p-2 text-title-dark font-medium capitalize hover:text-primary duration-300 flex gap-2'
            >
              {link.name}
              {link.children && <BsChevronDown className='mt-2' />}
            </Link>

            {link.children && (
              <NavLinkPopup
                sublinks={link.children}
                styles={`${
                  link.id === sublinkToShow
                    ? 'translate-y-0 visible opacity-1'
                    : 'translate-y-10 invisible opacity-0'
                }`}
              />
            )}
          </li>
        ))}
      </ul>

      {/* Burger Menu */}
      <button type='button' title='Burger menu' className='block lg:hidden'>
        <AiOutlineMenu className='text-xl' />
      </button>
    </nav>
  );
};

export default Navbar;
