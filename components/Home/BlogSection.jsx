import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Button, VecText } from '..';

const BlogSection = () => {
  return (
    <section className='bg-white p-4 sm:p-8 py-16 md:px-12 xl:p-24'>
      <div className='flex items-center justify-center'>
        <VecText text='Our Blog' />
      </div>
      <p className='font-bold text-title-dark text-4xl text-center font-serif sm:text-5xl my-4 lg:text-6xl'>
        Our Latest Blog
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
        {[1, 2, 3].map((blog) => (
          <div
            key={blog.title}
            className='relative w-full max-w-[320px] mx-auto bg-white rounded-xl border border-gray-200 menu-item pt-12 mt-52 md:mt-60'
          >
            <Image
              className='w-[280px] h-[240px] duration-500 absolute -top-[70%] left-[50%] -translate-x-[50%] rounded-xl'
              src='https://www.recipetineats.com/wp-content/uploads/2022/02/Chicken-Shawarma-Wrap_2-SQ.jpg'
              alt={'blog-' + blog}
              width={300}
              height={300}
            />

            <Link
              href='/blog-1'
              className='py-2 px-4 bg-white text-primary absolute right-8 -top-[65%] rounded-md hover:bg-primary hover:text-white duration-500'
            >
              <p className='text-xl font-bold'>{(blog + 1) * 5}</p>
              <span>Sept</span>
            </Link>

            <div className='p-6'>
              <Link
                href={`/blog-${blog}`}
                className='gap-2 my-2 text-center text-text-1 text-sm flex items-center justify-center hover:text-primary duration-300'
              >
                <span className='block w-6 h-[2px] bg-gray-300'></span>
                <span>Blog {blog + 1}</span>
              </Link>
              <Link
                href={`/blog-${blog}`}
                className='capitalize font-serif font-bold text-2xl text-title-dark text-center hover:text-primary duration-300'
              >
                Eat at Some Nutition Food & Happy Leadlife
              </Link>
              <div className='mb-2 mt-4 mx-auto w-full'>
                <Button
                  text='Read More'
                  icon={<FiArrowUpRight />}
                  url={`/blog-${blog}`}
                  styles='block mx-auto'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
