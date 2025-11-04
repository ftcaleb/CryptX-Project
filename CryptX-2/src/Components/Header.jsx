import React from 'react'
import search from '../Assets/search.svg'
import { CiBellOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import avatar from '../assets/avatar.png';

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-around  top-0">
      {/* Search Box */}
      <div className="flex items-center">
        <form className="relative">
          <input
            type="text"
            placeholder="Search type of keyword"
            className="p-2 pl-10 rounded-[5px] border w-68 focus:outline-none"
          />
          <img
            src={search}
            alt="search icon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-70"
          />
        </form>
      </div>

      {/* Icons placeholder */}
      
        
      
      

      {/* User info */}
      
      
      <div className="flex  items-end">
        <CiBellOn size={35} />
        <CiCircleQuestion size={35} /> 
        
        
        <div className='flex items-end p-1 ml-'>
        
        <img src={avatar} alt="User Avatar" className="w-9 h-9 rounded-full mb-1" />
        <div className="ml-2">
        <p className="">Laurice</p>
        <p className="text-sm text-gray-500">Laurice@11</p>
        </div>
        
        </div>
        </div>
      
    </div>
  )
}
