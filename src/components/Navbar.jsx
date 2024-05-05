import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 gap-6 bg-amber-100 p-4 lg:text-lg justify-center'>
        <NavbarItem title="Trending" 
        param="fetchTrending" />
        <NavbarItem title="Top Rated" 
        param="fetchTopRated" />
    </div>
  )
}

export default Navbar