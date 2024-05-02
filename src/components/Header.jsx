import React from 'react';
import MenuItem from './menuItem';
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between  items-center p-3 maxw-6xl mx-auto'>
        <div className='flex gap-4'>
            {/* to duplicate a line of code use shift+option and arrow down */}
            <MenuItem title="home" address={"/"} Icon={AiFillHome}/>
            <MenuItem title="about" address={"/about"} Icon={BsFillInfoCircleFill}/>
            
        </div>
        <Link href={"/"} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2'>IMDB</span>
            <span className='text-xl hidden'>Clone</span>
        </Link>
    </div>
  )
}

export default Header