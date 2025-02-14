import React,{useState} from 'react'
import { ChevronDown } from 'lucide-react';
const FAQItem = ({ques,ans}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full '>
    <button class="relative flex gap-2 items-start w-full py-5 font-normal"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)} >
        <span class=" text-dblue text-md text-left">{ques}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
        }`}
    >
        <div className="pb-5 leading-relaxed">
            <p className="text-black">{ans}</p>
        </div>
    </div>
 </div>
  )
}

export default FAQItem
