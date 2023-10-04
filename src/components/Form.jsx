import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginNav from './LoginNav';

export default function Form() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`http://localhost:3030/users/${id}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
  
        if (Object.keys(response).length === 0) {
          toast.error("Please enter a valid username");
        } else {
          if (response.password === password) {
            toast.success("Login Success");
            sessionStorage.setItem('username', id)
            navigate('/');
          } else {
            toast.error("Please enter a valid credential");
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <LoginNav />
      <div className='w-[100vw] flex items-center justify-center h-[90vh]'>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            id="inline-full-name" 
            type="text" 
            name='id'
            placeholder='Enter your email'
            onChange={e=>setId(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password" 
            type="text" 
            name='password'
            placeholder="******************"
            onChange={e=>setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type='submit'>
              Sign In
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
    </div>
  )
}
