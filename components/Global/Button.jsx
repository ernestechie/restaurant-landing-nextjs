import Link from 'next/link';
import React from 'react';

const Button = ({ icon, text, url = '', styles = '' }) => {
  return (
    <>
      {url ? (
        <Link
          href={url}
          className={`text-primary border border-primary rounded-full py-3 px-8 inline-flex items-center gap-2 hover:text-white hover:bg-primary duration-500 ${styles}`}
        >
          {icon}
          <span>{text}</span>
        </Link>
      ) : (
        <button
          className={`text-primary border border-primary rounded-full p-4 px-8 flex items-center gap-2 hover:text-white hover:bg-primary duration-500 ${styles}`}
        >
          {icon}
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
