import Link from 'next/link';
import React from 'react';

const NavLinkPopup = ({ sublinks, styles }) => {
  return (
    <div
      className={`p-4 absolute top-12 -left-4 bg-white min-w-[200px] duration-300 ${styles}`}
    >
      {sublinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          className='p-2 text-title-dark capitalize hover:text-primary flex gap-2 duration-300'
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinkPopup;
