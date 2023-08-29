import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <center>
    <div>
        <div>
          <h1 className='text-blue-800 font-bold text-3xl mt-36'>Welcome to Home page...</h1>
        </div>
       <div className='mt-14'>
        <span className='text-blue-800'>Click here to...&nbsp;&nbsp;&nbsp;</span>
         <a href="register" className='text-white font-bold border border-blue-800 bg-blue-800 rounded-md p-1 '>Register</a>
       </div>

       <div className='mt-14'>
        <span className='text-blue-800'>Already a User...&nbsp;&nbsp;&nbsp;</span>
         <a href="login" className='text-red-800 font-bold border border-blue-800 rounded-md p-1' >Login</a>
       </div>
    </div>
    </center>
  )
}

export default Home
