import bannerImage1 from '@/assets/banner-1.png';

import bannerImage2 from '@/assets/banner-2.png';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VecText } from '..';

const NewItemsList = () => {
  const swiperRef = useRef(null);

  const goBackToFirstSlide = () => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.swiper.slideTo(0); // This will go to the first slide
      }, 5000);
    }
  };

  return (
    <section className='p-8 new-items-section py-16 md:px-12 xl:p-24'>
      <div className='flex items-center justify-center'>
        <VecText text='Our Experties' />
      </div>
      <p className='font-bold text-white text-4xl text-center font-serif sm:text-5xl my-2 lg:text-6xl'>
        Restho New Item List
      </p>
      <p className='text-text-light text-center'>
        Various versions have evolved over the years, sometimes on purpose.
      </p>
      {/*  */}
      <Swiper
        ref={swiperRef}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper mt-16'
        onSlideChange={(swiper) => {
          // Check if we're on the last slide
          if (swiper.isEnd) {
            // goBackToFirstSlide();

            console.log('This is the last slide');
          }
        }}
      >
        <SwiperSlide>
          <div className='flex items-center justify-center mx-auto min-h-[500px]'>
            <div className='mx-auto relative'>
              <div className='rotate-45 h-20 w-20 p-2 bg-white rounded-md absolute left-[33%] bottom-[90px] translate-x-[29%] flex items-center justify-center'>
                <p className='text-xl font-bold text-text-1 -rotate-45'>$50</p>
              </div>
              <Image src={bannerImage1} className='w-full mb-2' />
              <p className='font-serif font-bold text-white text-center text-2xl sm:text-4xl'>
                Delicious Food
              </p>
              <p className='text-text-light text-center'>
                It is an established fact that a reader will be distracted.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center mx-auto min-h-[500px]'>
            <div className='mx-auto relative'>
              <div className='rotate-45 h-20 w-20 p-2 bg-white rounded-md absolute left-[33%] bottom-[90px] translate-x-[29%] flex items-center justify-center'>
                <p className='text-xl font-bold text-text-1 -rotate-45'>$50</p>
              </div>
              <Image src={bannerImage2} className='w-full mb-2' />

              <p className='font-serif font-bold text-white text-center text-2xl sm:text-4xl'>
                Delicious Food II
              </p>
              <p className='text-text-light text-center'>
                It is an established fact that a reader will be distracted.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default NewItemsList;
