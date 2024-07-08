import React,{useState} from 'react'
import { Toaster, toast } from 'sonner'
const Modal = ({visible,handlevisible}) => {

    const [passwordvisible,setpassVisible]=useState(false)
  const [confirmvisible,setconfirmVisible]=useState(false)

  function togglePassVisible(){
      setpassVisible(!passwordvisible);
  }
  function toggleConfirmVisible(){
    setconfirmVisible(!confirmvisible);
}
//const user = sessionStorage.getItem('signupdata');
const[name,setName]=useState('')
const[fname,setFName]=useState('')
const[email,setEmail]=useState('')
const[femail,setFEmail]=useState('')

const emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

async function submit(){
  if(name===''||fname===''||email===''||femail===''){
    toast.error("Please fill all the fields")
  }
  else if(email===femail){
    toast.error("Please enter different emails")
  }
  else if(!email.match(emailRegex) || !femail.match(emailRegex)){
    toast.error("Please enter a Valid Email")
  }
  else{
  const referalData={
    name:name,
    fname:fname,
    email:email,
    femail:femail
  }
  console.log(referalData)
  handlevisible(visible)
    
}
}
    if (!visible) return null;
    
    return (
        <div className='flex items-center justify-center fixed inset-2 bg-transparent backdrop-blur-sm  '>
              <div class="bg-white shadow-md  border-2 border-black w-1/4">
                <div className='shadow-lg pt-5 pb-5'>
                <button className=' absolute ml-5 text-white text-center w-8 h-8 rounded-3xl bg-dblue' onClick={()=>handlevisible(visible)}>X</button>
                <h3 className="text-2xl font-bold bg-inherit text-dblue text-center">Refer a Friend ! </h3>
      <form className='mt-5 lg:mt-10 flex flex-col gap-6 lg:px-8'> 
        <input type='text' placeholder='Your Name' className='border-b p-2 ' onChange={(e)=>setName(e.target.value)} defaultValue={name}/>
        <input type='mail' placeholder='Your Email' className='border-b p-2' onChange={(e)=>setEmail(e.target.value)} defaultValue={email}/>
        <input type='text' placeholder='Friend Name'  className='border-b p-2'onChange={(e)=>setFName(e.target.value)} defaultValue={fname}/>
        <input type='mail' placeholder='Friend Email' className='border-b p-2' onChange={(e)=>setFEmail(e.target.value)} defaultValue={femail}/>
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
