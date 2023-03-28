import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex p-4 text-white justify-center items-center'>
        <h1 className='font-MyName text-2xl'>Sajid Munawar</h1>
        <div className='hidden  ml-auto md:flex gap-5 font-cursive font-medium'>
            <Link href="/" className='navbar-links'>Home</Link>
            <Link href="/" className='navbar-links'>Linkbout</Link>
            <Link href="/" className='navbar-links'>Projects</Link>
            <Link href="/" className='navbar-links'>Skills</Link>
            <Link href="/" className='navbar-links'>Contact</Link>
        </div>        
        <RxHamburgerMenu className='md:hidden ml-auto'/>
    </div>
  )
}

export default Navbar