import React from 'react';
import { VecText } from '..';

const ReservationSection = () => {
  return (
    <section className='p-4 sm:p-8 py-16 md:px-12 xl:p-24 reservation-section'>
      <div className='flex flex-col items-center justify-center py-8'>
        <VecText text='Online Reserve' />
        <p className='font-bold text-white text-4xl text-center font-serif sm:text-5xl my-4 lg:text-6xl'>
          For Online Reservation
        </p>

        <form className='mt-12 w-full max-w-[800px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-8'>
            <input
              type='text'
              name='name'
              id='name'
              className='w-full p-4 bg-title-dark rounded-full outline-none border-text-1 border focus:border-primary duration-300 text-text-1'
              placeholder='Name*'
              required
            />
            <input
              type='tel'
              name='phone'
              id='phone'
              className='w-full p-4 bg-title-dark rounded-full outline-none border-text-1 border focus:border-primary duration-300 text-text-1'
              placeholder='Phone*'
              required
            />
            <input
              type='text'
              name='people'
              id='people'
              className='w-full p-4 bg-title-dark rounded-full outline-none border-text-1 border focus:border-primary duration-300 text-text-1'
              placeholder='People'
              required
            />
            <input
              type='date'
              name='check_in'
              id='check_in'
              className='w-full p-4 bg-title-dark rounded-full outline-none border-text-1 border focus:border-primary duration-300 text-text-1'
              placeholder='Check In'
              required
            />
            <select
              name='time'
              id='time'
              className='w-full p-4 bg-title-dark rounded-full outline-none border-text-1 border focus:border-primary duration-300 text-text-1'
              defaultValue='08:00AM'
            >
              {[7, 8, 9, 10, 11].map((time) => (
                <option key={time} value={time}>
                  {time < 10 ? '0' : ''}
                  {time}:00AM
                </option>
              ))}
            </select>
            <input
              type='email'
              name='email'
              id='email'
              className='w-full p-4 bg-title-dark rounded-full outline-none border-text-1 border focus:border-primary duration-300 text-text-1'
              placeholder='Email'
              required
            />
          </div>

          <button
            type='button'
            className='block mt-8 p-4 rounded-full bg-primary text-white mx-auto w-full hover:bg-white hover:text-primary duration-500 max-w-[380px]'
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
