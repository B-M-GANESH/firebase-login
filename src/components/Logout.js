import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = async() =>{
        try{
            await auth.signOut()
            navigate("/")
        }
        catch(error){
            console.log(error);
            alert(error)
        }
    }
  return (
    <center>
    <div>
        <div>
          <h1 className='text-blue-800 font-bold text-3xl mt-36'>WELCOME TO OUR WEBSITE</h1>
          <h1 className='text-blue-800 font-bold text-3xl mt-10'>Successfully Login...</h1>
        </div>
       <div className='mt-14'>
        <button className='text-red-800 font-bold border border-blue-800 rounded-md p-1' onClick={handleLogout}>Logout</button>
       </div>
    </div>
    </center>
  )
}

export default Logout
