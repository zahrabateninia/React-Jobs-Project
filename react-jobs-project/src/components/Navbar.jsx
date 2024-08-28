import logo from '../assets/images/logo.svg';
import React from 'react'
// using a Link tag it doesn't do an actual refresh so we use it instead of a tag
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (    
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <Link
              className='flex flex-shrink-0 items-center mr-4'
              to='/' // homepage
            >
              <img 
                className='h-10 w-auto' 
                src={logo} 
                alt='React Jobs' 
              />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </Link>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <Link to='/' >
                  Home
                </Link>
                <Link to='/jobs' >
                  Jobs
                </Link>
                <Link to='/add-job'>
                  Add Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
