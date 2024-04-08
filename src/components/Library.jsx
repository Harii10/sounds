import React from 'react'

function Library(props) {
  return (
    <div>
        <div className='h-fit w-fit text-white'>
            <ul className='h-28 w-40 rounded-sm '>
                <li className='p-5 flex gap-5 w-lvw lg:p-5'>
                    <img className=' w-20 h-20 rounded-full border'/>
                    <p className='mt-6 h-fit'>{props.title}</p>              
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Library