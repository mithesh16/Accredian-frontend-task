import React,{useState} from 'react'
import hero from '../assets/hero2.png'
import money  from '../assets/money.png'
import Modal from './Modal'

const Hero = () => {
    const [visible, setVisible] = useState(false);
    const handlevisible = () => setVisible((cur) => !cur);

    const modalToggle=(visiblee)=>{
        handlevisible(visiblee);
    }
  return (
    <div className='md:px-52 px-5 w-full md:min-h-[50vh]'>
        
        <div className='flex drop-shadow-2xl py-3  rounded-2xl w-full h-1/2 md:h-[90%] p-5 items-center justify-center bg-lblue '>
            {/* <img src={money} className='absolute w-[157px] h-[87px] left-[280px] top-[356px] bg-transparent'/>
            <img src={money} className='absolute w-[157px] h-[87px] left-[0px] top-[-10px] rotate-90 bg-transparent'/> */}
            
            <div className=' md:w-[40%] bg-inherit  space-y-5 py-5 md:py-1 items-center'>
            <div className='bg-inherit'>
            <h1 className='text-[30px] md:text-[70px] md:text-left text-center font-bold font-["roboto"] bg-inherit leading-none '>
  Let's Learn  <span className="hidden md:inline"><br/></span> & Earn
</h1>
            </div>
            <div className='bg-inherit text-center md:text-left'>
                <h1 className='text-lg md:text-2xl font-["roboto"] bg-inherit'>Get a chance to win 
                <span className="hidden md:inline"><br/></span> up-to <span className='text-xl md:text-3xl font-semibold text-dblue bg-inherit justify-center items-center flex md:inline'>Rs. 15,000</span> </h1> 
            </div>
            <div className='bg-inherit flex items-center justify-center md:block md:mt-5 '>
                <button onClick={()=>modalToggle(visible)} className='bg-dblue rounded-md text-sm text-white px-10 py-3'>Refer Now</button>
            </div>
            <div>

            </div>
            </div>
            <div className='hidden md:flex w-1/2 bg-inherit h-full'>
            <div className='bg-inherit flex justify-start items-center h-full'>
                {/* <img src={money} className='absolute w-[157px] h-[87px] left-[500px] top-[50px] rotate-90 bg-transparent'/> */}
            <img src={hero} alt='hero' className='max-w-full h-auto object-contain bg-inherit'/>
        </div>
        
            </div>
        </div>
        <Modal visible={visible} handlevisible={modalToggle}/>
        
    </div>
  )
}

export default Hero
