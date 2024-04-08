import React from 'react'
import { ImHeadphones } from "react-icons/im";
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className='text-white'>
      <div class="flex justify-center items-center h-lvh w-lvw bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <div className='flex flex-col justify-center items-center w-full'>
        <ImHeadphones className='h-24 w-24 text-chose-30 lg:w-72 lg:h-72'/>
        <h3 className='m-5 font-extrabold gap-4 uppercase text-3xl lg:text-7xl lg:m-10 tracking-wide'>Sounds</h3>

        
          <button className='text-2xl font-semibold m-3 p-5 rounded-full bg-gray-700 text-white lg:w-70 lg:hover:bg-slate-600'>
            <Link to='/sounds/home'>  
              <span className=' tracking-widest'>Start Listening</span>
            </Link>   
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default index