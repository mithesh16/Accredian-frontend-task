import { ChevronDown, ChevronRight, Headset } from 'lucide-react'
import React,{useState} from 'react'
import FAQItem from './FAQItem';
const FAQ = () => {

  return (
    <div className='max-w-6xl mx-auto px-4 pb-5 mt-10 '>
        <div className='flex items-center justify-center'>
        <h1 className='text-3xl font-semibold text-center'>
        Frequently Asked <span className='text-dblue'>Questions</span>
      </h1>
        </div>

        <div className='md:flex w-full mt-10 items-start justify-center'> 
            <div className='w-full md:w-1/3 flex flex-col items-center justify-center gap-4'>
                <div className='shadow-xl drop-shadow-xl w-[260px] border-2 border-[#E2E8F0]  px-10 py-4 rounded-lg flex items-center justify-center'>
                    <span className='text-dblue font-semibold text-lg  '>Eligiblity</span>
                </div>
                <div className='shadow-xl drop-shadow-xl w-[260px]  px-10 py-4 rounded-lg flex items-center justify-center border-2 border-[#737373]'>
                <span className='text-[#737373] font-semibold text-lg  '>How to Use?</span>
                </div>
                <div className='shadow-xl drop-shadow-xl w-[260px]  px-10 py-4 rounded-lg flex items-center justify-center border-2 border-[#737373]'>
                    <span className='text-[#737373] font-semibold text-lg  '>Terms & Conditions</span>
                </div>

            </div>
        <div className='w-full md:w-2/3 px-5  h-[100%] flex flex-col items-start justify-start '>
        <FAQItem ques='Do I need to have prior Product Management and Project Management experience to enroll in the program?' 
        ans='No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                    suitable for individuals from any field of work.'/>
          <FAQItem 
          ques='What is the minimum system configuration required?' 
          ans='There is no minimum system requirement'/>
         </div>


        </div>

        <div className='w-full rounded-lg bg-dblue p-5 md:p-10 md:py-12 md:mt-16 md:flex items-center justify-center'>
            <div className='w-full md:w-2/3 h-full p-4 flex items-center justify-center gap-4'>
                <div className='w-fit rounded-xl h-fit p-2 border-4 border-mblue bg-white' >
                <Headset color='#1A73E8' size={50}/>
                </div>
               <div className='flex flex-col gap-2 justify-center items-start h-full text-white text-left '>
                <h1 className='text-lg md:text-xl font-semibold'>Want to delve deeper into the program?</h1>
                <h3 className='text-sm md:text-md font-medium'>Share your details to receive expert insights from our program team!</h3>
               </div>
            </div>
            <div className='w-full md:w-1/3 flex items-center md:justify-end justify-center'>
        
                <button className='bg-white text-dblue rounded-lg p-2 px-6 text-md md:text-lg font-semibold flex items-center justify-center'>
                    Get in touch
                    <ChevronRight/>
                </button>
            </div>

            <div></div>
        </div>
     
    </div>
  )
}

export default FAQ
