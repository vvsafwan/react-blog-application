import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginNav() {
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
                    <Link className='text-white pt-1' to={"/signin"}>Sign In</Link>
                    <Link className='text-white pt-1' to={"/signup"}>Sign Up</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
