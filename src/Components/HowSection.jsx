import React from 'react'
import bgimg from '../assets/acc-2.png'
import bgmobile from '../assets/bgcopy.png'
const HowSection = () => {
  return (
    <div className=' bg-lblue md:mt-16 mt-8 p-10 min-h-[50vh] flex flex-col items-center '>
      <h1 className='text-3xl font-semibold'>
        How do I <span className='text-dblue'>Refer?</span>
      </h1>
      <div className='w-full h-fit md:flex items-center justify-center hidden'>
            <img src={bgimg} alt='Bg' width={2000} height={2000}/>
      </div>
      <div className='w-full h-fit md:hidden items-center justify-center flex'>
            <img src={bgmobile} alt='Bg' width='100%' height='100'/>
      </div>
      <div className='bg-inherit '>
                <button  className='bg-dblue rounded-md text-xl font-normal text-white px-12 py-4'>Refer Now</button>
            </div>
    </div>
  )
}

export default HowSection
