import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center justify-center py-5'>
            <div className='bg-lblue rounded-3xl w-2/3 lg:w-1/3 px-2 py-3'>
                <ul className='flex items-center justify-around  space-x-2 bg-inherit'>
                 <li className='text-md bg-inherit text-dblue'>Refer </li>
                 <li className='text-md bg-inherit'>Benefits</li>
                 <li className='text-md bg-inherit'>FAQs</li>
                 <li className='text-md bg-inherit'>Support</li>
                </ul>
            </div>
      
    </div>
  )
}

export default Nav
