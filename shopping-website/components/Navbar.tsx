import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-backish'>
                <Link className='navbar_link relative' href="#">
                  Home
                </Link>
                <Link className='navbar_link relative' href="#">
                Lap_top
                </Link>
                <Link className='navbar_link relative' href="#">
                  Desktop
                </Link>
                <Link className='navbar_link relative' href="#">
                 Computer_parts
                </Link>
                <Link className='navbar_link relative' href="#">
                  About
                </Link>
                <Link className='navbar_link relative' href="#">
                 Contacu_us
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar