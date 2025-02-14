import React from 'react'
import ProgramTable from './ProgramTable'
import AllPrograms from './AllPrograms'
import { ChevronDown } from 'lucide-react'
const Benifits = () => {
  return (
    <div className= 'md:mt-16 mt-10  min-h-[72vh] flex flex-col items-center '>
      <h1 className='text-3xl font-semibold text-center '>
        What Are <span className='text-dblue'>The Referral Benefits?</span>
      </h1>
      <div className='w-full md:w-[60%] flex items-center justify-end  '>
      <label class="inline-flex items-center cursor-pointer ">
      <span class="ms-3 text-xl font-normal text-black ">Enrolled</span>
  <input type="checkbox" value="" class="sr-only peer bg-white "/>
  <div class="relative m-4 w-12 h-7 bg-gray-200 border-2 border-black items-center justify-center flex
   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
   peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-dblue after:border-bgray after:border 
   after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600 "></div>

</label>
      </div>
      
      <div className='w-full md:flex items-start justify-center gap-10 px-6  '>
        <AllPrograms/>
        <ProgramTable/>
      </div>
      <div className='w-full md:w-[60%] flex items-center justify-end mt-5'>
        <div className='border-2 text-sm text-bordergray border-bordergray rounded-md px-5 py-1 flex items-center justify-center'>
        Show More <span><ChevronDown color='#CACACA'/></span>
        </div>
      </div>
      <div className='mt-5 '>
                <button className='bg-dblue rounded-md text-sm text-white px-10 py-3'>Refer Now</button>
            </div>
      
    </div>
  )
}

export default Benifits
