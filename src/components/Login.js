import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'




const Login = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
    
    const handleLogin = async(e) =>{
      e.preventDefault();
    
      try{
        await auth.signInWithEmailAndPassword(email,password)
        console.log(email,+" "+password);
        navigate("/logout")
      }
      catch(error){
          console.log(error);
          alert(error)
      }
    
    }

  return (
    <div className='flex justify-center mt-28'>
      <form onSubmit={handleLogin}>
        <div className='h-96 w-96 flex flex-col border-2 border-blue-600 rounded-lg'>
      <h1 className='text-lg font-bold text-blue-800 mx-auto mt-3 bg-gray-400 px-6 rounded-md'>Login</h1>
          <div className='p-5'>
            <label htmlFor="mail" className='text-blue-800 font-medium'>Email:</label><br /><br />
            <input type="email" className='w-80 py-3' placeholder='Enter the mail...' 
             id='mail' onChange={(e)=>setEmail(e.target.value)}
             />
          </div>
          <div className='p-5'>
            <label htmlFor="pass" className='text-blue-800 font-medium'>Password:</label><br /><br />
            <input type="password" className='w-80 py-3 ' placeholder='Enter the password...'
             id='pass' onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div>
            <button type='submit' className='border border-blue-800 px-40 py-2 ml-2 rounded-md bg-blue-800 text-white font-bold'>Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
