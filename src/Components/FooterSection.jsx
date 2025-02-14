
import React from 'react'
import footerlogo from '../assets/logo2.png'
import { Plus,PhoneCall } from 'lucide-react'
import { IoLogoInstagram,IoLogoFacebook,IoLogoLinkedin,IoLogoTwitter,IoLogoYoutube } from "react-icons/io"
import copy from 'copy-to-clipboard'
const FooterSection = () => {
    const programs = [
        {
            'name':'Data Science & AI'
        },
        {
            'name':'Product Management'
        },{
            'name':'Business Analytics'
        }, {
            'name':'Digital Transformation'
        }, {
            'name':'Business Management'
        },{
            'name':'Project Management'
        },
        {
            'name':'Strategy & Leadership'
        },{
            'name':'Senior Management'
        }, {
            'name':'Fintech'
        },
       
    ]
    const links=[
        {'name':'About',
          'url' :'https://accredian.com/About' 
        },
        {   'name':'Career',
            'url' :'https://accredian.com/Career' },
        {   'name':'Blog',
            'url' :'https://blog.accredian.com/' },
        {   'name':'Admission Policy',
            'url' :'https://accredian.com/policies/accredian-policy' },
        {   'name':'Referral policy',
            'url' :'https://accredian.com/terms/referral' },
        {   'name':'Privacy Policy',
            'url' :'https://accredian.com/terms/privacy' },
        {   'name':'Terms Of Service',
            'url' :'https://accredian.com/terms' },
        {   'name':'Master FAQs',
            'url' :'https://accredian.com/Faq' }
    ]
    const contacts=[
        'Data Science Admission Helpline:+91 9079653292 (9 AM - 7PM)',
        'Project Management Admission Helpline:+91 9625811095 ',
        'Ennrolled Student Helpline:+91 7969322507',
        'Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015'
    ]
    const handleCopyClick = async (text) => {
           copy(text);
            alert(`"${text}" copied to your clipboard`);
    }

  return (
    <div className='w-full h-fit mt-5 bg-[#282828] flex flex-col items-center gap-5 pb-5'>
        <div className='w-full md:w-[60%]  flex items-center justify-center py-5  px-10'>
      <div className='w-1/2 flex items-start justify-start'>
        <img src={footerlogo} alt='logo' width={180} height={70} className='hidden md:inline'/>
        <img src={footerlogo} alt='logo' width={120} height={50} className='md:hidden inline'/>
      </div>
      <div className='w-1/2 flex items-center justify-end'>
        <div className='flex flex-col items-center justify-center gap-1' >
            <button className='md:px-5 md:p-3 p-1 bg-dblue border-2 border-white text-sm md:text-md rounded-lg text-white'>
                Schedule 1-on-1 Call Now
            </button>
            <h1 className='text-white text-sm text-center'>
                Speak with our Learning Advisor
            </h1>
        </div>
      </div>

      </div>
      <div className='w-[80%] md:w-[60%] border-white border-2'></div>
      <div className='w-full md:w-[60%]  flex flex-row items-start md:justify-center'>
        <div className='w-[50%] md:w-[30%] text-white ml-10' >
            <ul >
                <li className='w-full  text-xl font-light p-1 md:p-3 flex items-stretch justify-between'>Programs</li>
                {programs.map((program,index)=>(
                     <div className='w-full text-sm md:text-lg p-1 md:p-3 flex items-stretch justify-between '>{program.name}<span><Plus/></span></div>
                )
                )}
            </ul>
        </div>
        <div className='hidden md:inline w-[45%] px-10'>
        <ul className='pt-3'>
                    <li className='text-white font-medium px-1 pt-1 text-xl'>Contact Us</li>
                    <div className='text-sm font-normal p-0.5 text-white text-left cursor-pointer' onClick={()=>handleCopyClick('admissions@accredian.com')}> Email us (For Data Science Queries): admissions@accredian.com,</div>
                    <div className='text-sm font-normal p-0.5 text-white text-left cursor-pointer' onClick={()=>handleCopyClick('pm@accredian.com')}> Email us (For Project Management Queries): pm@accredian.com,</div>
                    {contacts.map((contact,index)=>(
                        <div className='text-sm font-normal p-0.5 text-white text-left '>{contact}</div>
                    ))}
                       <li className='text-white font-medium px-1 pt-1 text-lg'> <a href='https://accredian.com/whyaccredian' target='_blank'>Why Accredian</a></li>
                       <li className='text-white font-thin px-1 pt-1 text-xl'>Follow Us</li>
                       <div className='flex items-center justify-start text-white gap-4 mt-3'>
                        <a><IoLogoFacebook size={30}/></a>
                        <a><IoLogoLinkedin size={30}/></a>
                        <a><IoLogoTwitter size={30}/></a>
                        <a><IoLogoInstagram size={30}/></a>
                        <a><IoLogoYoutube size={30}/></a>
                       </div>
            </ul>
        </div>
        <div className='w-[50%] md:w-[25%] ml-10 md:ml-0 '>
            <ul className=''>
                    <li className='text-white font-medium px-1 pt-1 text-xl'>Accredian</li>
                    {links.map((link,index)=>(
                        <div className='text-md md:text-sm font-normal p-1 text-white text-left ' ><a href={link.url} target='_blank' >{link.name}</a></div>
                    ))}
            </ul>
        </div>
      </div>
      {/* Mobile  */}
      <div className='md:hidden inline w-[70%]  text-'>
        <ul className=''>
                    <li className='text-white font-medium px-1  text-xl text-center'>Contact Us</li>
                    <div className='text-sm font-normal p-0.5 text-white text-left cursor-pointer' onClick={()=>handleCopyClick('admissions@accredian.com')}> Email us (For Data Science Queries): admissions@accredian.com,</div>
                    <div className='text-sm font-normal p-0.5 text-white text-left cursor-pointer' onClick={()=>handleCopyClick('pm@accredian.com')}> Email us (For Project Management Queries): pm@accredian.com,</div>
                    {contacts.map((contact,index)=>(
                        <div className='text-sm font-normal p-0.5 text-white '>{contact}</div>
                    ))}
                       <li className='text-white font-medium px-1 pt-3 text-lg text-center '>Why Accredian</li>
                       <li className='text-white font-thin px-1 pt-1 text-xl text-center'>Follow Us</li>
                       <div className='flex items-center justify-center text-white gap-4 mt-3'>
                        <a><IoLogoFacebook size={30}/></a>
                        <a><IoLogoLinkedin size={30}/></a>
                        <a><IoLogoTwitter size={30}/></a>
                        <a><IoLogoInstagram size={30}/></a>
                        <a><IoLogoYoutube size={30}/></a>
                       </div>
            </ul>
        </div>
        <div className='flex w-[90%] items-center justify-end'>
        <button className='bottom-10 right-10 w-fit h-fit p-3 bg-dblue rounded-full text-white flex items-center justify-center'>
      <PhoneCall size={30}/>
    </button>
        </div>

      <div className='w-full flex items-center justify-center text-sm font-normal text-white text-center '>
      © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </div>

      
    </div>
  )
}

export default FooterSection
