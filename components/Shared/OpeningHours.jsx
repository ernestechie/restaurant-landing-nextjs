import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';

const OpeningHours = () => {
  return (
    <div className='flex items-center justify-center lg:justify-between gap-16 text-sm max-container'>
      <p className='flex items-center gap-2'>
        <span className='text-primary'>Opening Hour:</span>
        <span className='text-white'>9:00AM to 10:00PM</span>
      </p>
      <div className='hidden lg:flex items-center gap-8'>
        <a
          href='mailto:info@example.com'
          className='flex items-center gap-2 switch-hover duration-300'
        >
          <span className='text-primary one'>
            <AiOutlineMail />
          </span>
          <span className='text-white two'>info@example.com</span>
        </a>
        <p className='flex items-center gap-2 switch-hover duration-300'>
          <span className='text-primary one'>
            <MdOutlineLocationOn />
          </span>
          <span className='text-white two'>
            Road-01, Block-B, West London City
          </span>
        </p>
      </div>
    </div>
  );
};

export default OpeningHours;
