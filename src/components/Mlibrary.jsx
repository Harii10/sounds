import React from 'react'
import Library from './Library'
import {genres} from '../assets/constants'

function Mlibrary() {
    const library = genres.map((genre)=>
                <Library
                title={genre.title}
                />
                )                
  return (
    <div>
    <ul className='flex justify-between sticky top-0 bg-chose-40 lg:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black -mt-3 lg:ml-80  text-white p-5'>
        <li>
            <h3 className='text-2xl font-bold'>Library</h3>
        </li>
        <li className='  lg:p-1 rounded-full hover:bg-chose-40'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
        </li>
    </ul>
        <div className='lg:ml-80'>
            {library}
        </div>
        
    </div>
  )
}

export default Mlibrary