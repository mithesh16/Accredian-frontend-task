import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='px-10 xl:px-52 py-5'>
      <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center space-x-2 lg:space-x-5'>
            <img src={logo} alt='logo' className='w-32 h-9 '/>
            <div class="relative inline-block text-left">
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-dblue px-3 py-2 text-sm font-light text-white" id="menu-button">
      Courses
      <svg class="-mr-1 h-5 w-5 text-white bg-transparent" viewBox="0 0 20 20" fill="white" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
</div>
            </div>

            <div>
                <ul className='flex items-center justify-evenly space-x-3 lg:space-x-5 text-sm'>
                  <div className='hidden md:flex items-center justify-end space-x-2'>
                  <li>Refer & Earn</li>
                    <li>Resources</li>
                    <li>About Us</li>
                   
                  </div>
              
                    <div className='hidden md:flex items-center justify-end space-x-2'>
                    <button className='bg-grey text-black px-4 py-2 rounded-lg'>Login</button>
                    <button className='bg-dblue text-white px-4 py-2 rounded-lg'>Try for free</button>
                    </div>
                    
                </ul>
            </div>
</div>
    </div>
  )
}

export default Navbar
