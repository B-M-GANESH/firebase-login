import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-10 bg-blue-600'>
        <div className='flex justify-between'>
        <div>
            <h2 className='text-white font-bold text-2xl ml-10 mt-1 '>Welcome to Website</h2>
        </div>
      <div className='flex gap-28 mr-32 text-white font-bold mt-3'>
        <Link className='transform hover:scale-125 duration-100' to='home'>Home</Link>
      </div>
        </div>
    </div>
  )
}

export default Navbar
