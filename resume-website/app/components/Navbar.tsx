import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex p-4 bg-slate-600 text-white justify-center items-center'>
        <h1 className='font-MyName text-2xl'>Sajid Munawar</h1>
        <div className='hidden  ml-auto md:flex gap-5 font-cursive font-medium'>
            <Link href="/" className='md:hover:scale-125 duration-500'>Home</Link>
            <Link href="/" className='md:hover:scale-125 duration-500'>Linkbout</Link>
            <Link href="/" className='md:hover:scale-125 duration-500'>Projects</Link>
            <Link href="/" className='md:hover:scale-125 duration-500'>Skills</Link>
            <Link href="/" className='md:hover:scale-125 duration-500'>Contact</Link>
        </div>        
        <RxHamburgerMenu className='md:hidden ml-auto'/>
    </div>
  )
}

export default Navbar