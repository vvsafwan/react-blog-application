import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import Select from "react-dropdown-select";
import axios from "axios";
import { options } from "../categories";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const addData = (data) => {
  return axios.post('http://localhost:3030/blog',data)
}

const useAddData = () => {
  return useMutation(addData)
}

export default function Addblog() {
  const navigate = useNavigate();
  useEffect(()=>{
    let username = sessionStorage.getItem('username')
    if(username===''|| username===null){
      navigate('/signin')
    }
  },[])
    const [values, setValues] = useState({
        name:'',
        category:'',
        description:''
    })
    const { mutate } = useAddData()
    const handleSubmit = (event)=>{
        event.preventDefault();
        mutate(values);
        event.target.reset();
    }
  return (
    <div>
      <Nav />
    <div className="flex justify-center items-center w-[100vw] h-[90vh]">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Title"
              onChange={e => setValues({...values,name: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <Select
                name="category"
                options={options}
                labelField="id"
                valueField="name"
                onChange={e => setValues({...values,category: e[0].id})}
            >
            </Select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline pb-20"
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              onChange={e => setValues({...values,description: e.target.value})}
            />
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
