import React, { useEffect, useState } from 'react'

function Artists(props) {

  const [artist,setArtist] = useState(null)

  
  

  return (  
    <div>
      <div className='mt-5 h-fit w-fit'>
        <ul className=' h-40 w-40 rounded-sm lg:h-56 lg:w-44 lg:hover:border-slate-800 lg:hover:border-transparent lg:hover:scale-105 transform duration-150'>
          <li className='p-3 group/item h-full'>
            <img className=' h-32 w-32 ml-3 lg:w-lvw lg:m-0 lg:h-40 rounded-full border'/>
            <div className=' flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden lg:block w-8 h-8 text-chose-20 -mt-7 p-1 bg-slate-800 rounded-3xl group/edit invisible hover:bg-transparent group-hover/item:visible ">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>    
              </div>     
            <p className='text-slate-800 flex justify-center lg:mt-5'>{props.title}</p>              
          </li>
        </ul>
      </div>  
    </div>  
  )
}

export default Artists