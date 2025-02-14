import { ChevronRight } from 'lucide-react'
import React from 'react'

const AllPrograms = () => {
    const programs = [
        {
            'name':'Product Management'
        }
        , {
            'name':'Strategy & Leadership'
        },
        {
            'name':'Business Management'
        },
        {
            'name':'Fintech'
        },
        {
            'name':'Senior Management'
        }, {
            'name':'Data Science'
        }, {
            'name':'Digital Transformation'
        }, {
            'name':'Business Analytics'
        }
    ]
  return (
    <div className="w-fit  md:w-[270px]  border-collapse h-full rounded-xl drop-shadow-xl bg-white shadow-xl hidden md:inline ">

      <div className='w-full border-b-2 text-sm  bg-dblue rounded-t-xl text-white p-4 flex items-stretch justify-between'>ALL PROGRAMS<span><ChevronRight/></span></div>
      {programs.map((program, index) => (
        <div className='w-full border-b-2 text-sm border-bordergray p-3 flex items-stretch justify-between uppercase'>{program.name}<span><ChevronRight/></span></div>
      ))}

    </div>
  )
}

export default AllPrograms
