import React,{useState} from 'react'
import hero from '../assets/hero2.png'
import money  from '../assets/money.png'
import Modal from './Modal'

const Hero = () => {
    const [visible, setVisible] = useState(false);
    const handlevisible = () => setVisible((cur) => !cur);

    const modalToggle=(visiblee)=>{
        console.log(visiblee)
        handlevisible(visiblee);
    }
  return (
    <div className='lg:px-52 w-full'>
        
        <div className='flex drop-shadow-2xl py-3  rounded-2xl w-full h-1/2 md:h-[90%] p-5 items-center justify-center bg-lblue '>
            {/* <img src={money} className='absolute w-[157px] h-[87px] left-[280px] top-[356px] bg-transparent'/>
            <img src={money} className='absolute w-[157px] h-[87px] left-[0px] top-[-10px] rotate-90 bg-transparent'/> */}
            
            <div className=' md:w-[40%] bg-inherit px-10 space-y-5 items-center'>
            <div className='bg-inherit'>
                <h1 className='text-[50px] font-bold font-["roboto"] bg-inherit leading-none'>Let's Learn <br/>& Earn</h1> 
            </div>
            <div className='bg-inherit'>
                <h1 className='text-2xl font-["roboto"] bg-inherit'>Get a chance to win 
                    <br/> up-to <span className='text-3xl font-semibold text-dblue bg-inherit'>Rs. 15,000</span> </h1> 
            </div>
            <div className='bg-inherit '>
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
