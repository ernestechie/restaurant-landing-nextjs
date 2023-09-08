import subtitleVec from '@/assets/sub-title-vec.svg';
import Image from 'next/image';
import React from 'react';

const VecText = ({ text }) => {
  return (
    <div className='flex items-center gap-2 font-medium'>
      <Image src={subtitleVec} alt='subtitle vector' />
      <p className='text-primary'>{text}</p>
      <Image src={subtitleVec} alt='subtitle vector' />
    </div>
  );
};

export default VecText;
