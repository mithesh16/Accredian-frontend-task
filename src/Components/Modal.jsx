import React,{useState} from 'react'
import { Toaster, toast } from 'sonner'
import {referFriend} from '../Services/Refer'

const Modal = ({visible,handlevisible}) => {

//const user = sessionStorage.getItem('signupdata');
const[name,setName]=useState('')
const[refree_name,setRefreeName]=useState('')
const[email,setEmail]=useState('')
const[refree_email,setRefreeEmail]=useState('')
const[course,setCourse]=useState('')

const emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

async function submit(){
  if(name===''||refree_name===''||email===''||refree_email===''|| course==''){
    toast.error("Please fill all the fields")
  }
  else if(email===refree_email){
    toast.error("Please enter different emails")
  }
  else if(!email.match(emailRegex) || !refree_email.match(emailRegex)){
    toast.error("Please enter a Valid Email")
  }
  else{
  const referalData={
    name:name,
    refree_name:refree_name,
    email:email,
    refree_email:refree_email,
    course:course
  }
  try {
    const resp=await referFriend(referalData)
    toast('Sending Referal')
    if(resp.msg=="CodeAdded"){
      toast.success('Referal Successful')
      handlevisible(visible)
    }
    else if(resp.msg=="Referral code already exists"){
      toast.error('Code Already exisits')
    }
    else{
      toast.error(resp.msg)
    }
  } catch (error) {
    //toast.error(error)
  }
  //console.log(referalData)
 
    
}
}
    if (!visible) return null;
    
    return (
        <div className='flex items-center justify-center w-full fixed inset-2 bg-transparent backdrop-blur-sm  '>
              <div class="bg-white shadow-md  border-2 border-black w-[70%] md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className='shadow-lg py-5 px-5 '>
                <button className=' absolute ml-5 text-white text-center w-8 h-8 rounded-3xl bg-dblue' onClick={()=>handlevisible(visible)}>X</button>
                <h3 className="text-2xl font-bold bg-inherit text-dblue text-center">Refer a Friend ! </h3>
      <form className='mt-5 lg:mt-10 flex flex-col gap-6 lg:px-8'> 
        <input type='text' required placeholder='Your Name*' className='border-b p-2 ' onChange={(e)=>setName(e.target.value)} defaultValue={name}/>
        <input type='mail' required placeholder='Your Email*' className='border-b p-2' onChange={(e)=>setEmail(e.target.value)} defaultValue={email}/>
        <input type='text' required placeholder='Referee Name*'  className='border-b p-2'onChange={(e)=>setRefreeName(e.target.value)} defaultValue={refree_name}/>
        <input type='mail' required placeholder='Referee Email*' className='border-b p-2' onChange={(e)=>setRefreeEmail(e.target.value)} defaultValue={refree_email}/>
        <select id="courses" defaultChecked='Choose course to refer' required class=" border-b p-2 " onChange={(e)=>setCourse(e.target.value)} defaultValue={course}>
    <option value='' className='text-grey'>Choose course to refer</option>
    <option value="Professional Certificate Program in Product Management">Professional Certificate Program in Product Management</option>
    <option value="PG Certificate Program in Strategic Product Management">PG Certificate Program in Strategic Product Management</option>
    <option value="Executive Program in Data Driven Product Management">Executive Program in Data Driven Product Management</option>
    <option value="Executive Program in Product Management and Digital Transformation">Executive Program in Product Management and Digital Transformation</option>
    <option value="Advanced Certification in Product Management">Advanced Certification in Product Management</option>
    <option value="Product Management and Project Management">Product Management and Project Management</option>
  </select>
        <button type='submit' className='w-full bg-dblue text-white text-lg rounded-3xl font-bold py-3' onClick={(e)=>{
          e.preventDefault()
          submit()}}> Submit</button>
      </form>
      
    </div>
</div>
        </div>
      

    )

}

export default Modal
