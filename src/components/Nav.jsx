import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  const logout = ()=>{
    sessionStorage.removeItem('username');
    navigate('/signin');
  }
  return (
    <div className='w-[100%]'>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    <Link className='text-white pt-1' to={"/"}>Home</Link>
                    <Link className='text-white pt-1' to={"/addblog"}>Add Blog</Link>
                    <button><Link className='text-white pt-1' onClick={logout} to={"/signin"}>Logout</Link></button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
