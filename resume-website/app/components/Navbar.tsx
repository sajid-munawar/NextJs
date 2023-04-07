
import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import Hamburger from '../Icons/Hamburger';

const Navbar = () => {
  return (
    <div className='flex p-4 text-white justify-center items-center bg-gray-700'>
        <h1 className='font-roboto text-lg'>Sajid Munawar</h1>
        <div className='hidden  ml-auto md:flex gap-5 font-cursive font-medium'>
            <Link href="/" className='navbar-links'>Home</Link>
            <Link href="/" className='navbar-links'>Linkbout</Link>
            <Link href="/" className='navbar-links'>Projects</Link>
            <Link href="/" className='navbar-links'>Skills</Link>
            <Link href="/" className='navbar-links'>Contact</Link>
        </div>        
        <div className='md:hidden ml-auto'>
        <Hamburger/>
        </div>
    </div>
  )
}

export default Navbar