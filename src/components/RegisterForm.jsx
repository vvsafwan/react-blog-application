import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginNav from "./LoginNav";


const addData = (data) => {
    return axios.post('http://localhost:3030/users',data)
}

const useAddData = () => {
  return useMutation(addData)
}

export default function RegisterForm(){
    const [values, setValues] = useState({
        id:'',
        email:'',
        mobile:'',
        password:''
    })
    const navigate = useNavigate()
    const { mutate } = useAddData();
    const handleSubmit = (event)=>{
        console.log(event)
        mutate(values);
        navigate('/signin')
        toast.success("Registration Successfully")
    }
    return (
        <div>
            <LoginNav />
            <div className='w-[100vw] flex items-center justify-center h-[90vh]'>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                    Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="id" 
                    type="text" 
                    name="id" 
                    placeholder='Enter your username' 
                    onChange={e=>setValues({...values, id:e.target.value})} />
                </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                    Email
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="email" type="email" 
                    name="email" 
                    placeholder='Enter your Email' 
                    onChange={e=>setValues({...values,email:e.target.value})}/>
                </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="mobile">
                    Mobile
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="mobile" 
                    type="number" 
                    name="mobile" 
                    placeholder='Enter your Mobile' 
                    onChange={e=>setValues({...values,mobile:e.target.value})}/>
                </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                    Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="password" 
                    type="password" 
                    name="password" 
                    placeholder="******************" 
                    onChange={e=>setValues({...values,password:e.target.value})}/>
                </div>
                </div>
                <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Sign Up
                    </button>
                </div>
                </div>
                <ToastContainer />
            </form>
        </div>
        </div>
    )
}