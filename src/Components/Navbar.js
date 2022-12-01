import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className=' bg-cyan-800 text-white'>
        <div className='flex flex-col items-center sm:flex-row  px-5'>
            <div>
                <h1 className='text-2xl my-2'>Bazar</h1>
            </div>
            <div className='mb-1 sm:ml-7 mt-3'>
                <Link className='mx-2' to='/'>Home</Link>
                <Link className='mx-2' to='/Products'>Products</Link>
                <Link className='mx-2' to='/About'>About</Link>
                <Link className='mx-2' to='/Contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}
