import React, { useState } from 'react'

const Login = () => {
  const [password,setPassWord] = useState()
  const [email,setEmail] = useState()

  const handleSubmit = (e) => {
    e.predentFefault()
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span>Login</h1>
            <p className='font-light'>Enter your credetials to acess the admin panel</p>
          </div>
          <form className='mt-6 w-full sm:max-w-md text-gray-600'
          onSubmit={handleSubmit}>
            <div  className='flex flex-col'>
              <label htmlFor="">E-mail</label>
                <input onChange={e=> setEmail(e.target.value)} value={email}
                className='border-b-2 border-gray-300 p-2 outline-none  mb-6' 
                type="email" required placeholder='Your e-mail' />
            </div>

            <div  className='flex flex-col'>
              <label htmlFor="">Password</label>
                <input onChange={e=> setPassWord(e.target.value)} value={password} 
                className='border-b-2 border-gray-300 p-2 outline-none  mb-6' 
                type="email" required placeholder='Your password' />
            </div>
            <button type='submit' 
            className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
