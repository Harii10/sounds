import React from 'react'
import SearchBar from './SearchBar'
import {genres} from '../assets/constants'

function Search() {

    const search = genres.map((genre)=>
                <SearchBar
                title={genre.title}
                />
                )                
  return (
    <div>
        <h3 className='text-white text-2xl mt-8 ml-5 lg:mt-3 pl-2 lg:ml-80 md:hidden lg:hidden'>Search</h3>
        <div className='flex ml-7 mt-3 lg:ml-80'>
            <input className='bg-chose-40 w-92 h-10 outline-none text-white p-4 rounded-md rounded-r-none lg:w-93 lg:h-14 lg:rounded-3xl lg:rounded-r-none' type='search' placeholder='Artists, songs, or podcasts'/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-10 text-white rounded-md rounded-l-none bg-chose-40 pr-1 lg:w-7 lg:h-14 lg:rounded-3xl lg:rounded-l-none">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
        </div>
        <div className='grid grid-rows-7 grid-flow-col gap-6 justify-center items-center mt-10 ml-0 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:justify-start lg:ml-80 lg:mt-32 '>    
            {search}
        </div>
    </div>
  )
}

export default Search