import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import avatar from '../assets/Avatar.png';

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-around top-0">
      {/* Search Box */}
        <div className="relative px-3 py-2 flex items-center gap-2">
          
          <input
            type="text"
            placeholder="Search type of keyword"
            className="Search py-2 px-8  border w-68 focus:outline-none "
          />
          <FiSearch className="absolute mr-3 right-3 text-gray-400 outline-none" />
        </div>


      <div className="flex items-center gap-6">
        <CiBellOn size={35} />
        <CiCircleQuestion size={35} />

        <div className='flex flex-end items-center gap-3 p-1 ml-45'>

          <img src={avatar} alt="User Avatar" className="w-9 h-9 rounded-full mb-1" />

          <div className="flex flex-col">
            <p className="">Laurice</p>
            <p className="text-sm text-gray-500">Laurice@11</p>
          </div>

          <FiChevronDown />
        </div>
        
      </div>
    </div>
  )
}
