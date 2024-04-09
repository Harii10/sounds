import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {

    const [open, setOpen] = useState(false)

  return (
<header>
    <div className=' mt-3 h-0 md:hidden lg:hidden'>
        <nav className=''>
            <ul className='flex justify-between inset-x-0 fixed bottom-0 w-full text-white h-11 bg-black
            '>
                <NavLink to='/sounds/home'
                    className={({isActive}) =>
                                      `duration-200 ${isActive ?
                                      "text-blue-600" : "text-gray-500"}`
                                  }
                    >
                    <li className=' ml-12 mt-3 h-fit'>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
                        </svg>
                    
                    </li>
                </NavLink>
                
                <NavLink to='/sounds/search'
                    className={({isActive}) =>
                                      `duration-200 ${isActive ?
                                      "text-blue-600" : "text-gray-500"}`
                                  }
                    >
                    <li className='mt-3 h-fit'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                        </svg>         
                    </li>
                </NavLink>

                <NavLink to='/sounds/library'
                    className={({isActive}) =>
                                      `duration-200 ${isActive ?
                                      "text-blue-600" : "text-gray-500"}`
                                  }
                    >
                    <li className=' mr-12 mt-3 h-fit'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z" clipRule="evenodd" />
                        </svg>
                    </li>
                </NavLink>
            </ul>
        </nav>
    </div>


    <div className={`${open ? 'hidden' : 'block'}`}>                          
        <div className='hidden md:block lg:block fixed top-0'>
            <nav className='border w-72 pl-6 rounded-lg m-3 md:w-52 lg:w-72'>
                <ul className='md:flex flex-col text-white'>
                <NavLink to='/sounds/home'
                        className={({isActive}) =>
                                      `${isActive ? "text-blue-600" : "text-gray-500"}`
                                }
                        >
                    <li className='flex py-4 cursor-pointer'>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span>Home</span>
                    </li>
                </NavLink>

                <NavLink to='/sounds/search'
                        className={({isActive}) =>
                                      `duration-200 ${isActive ?
                                      "text-blue-600" : "text-gray-500"}`
                                  }
                        >
                    <li className='flex py-4 cursor-pointer'>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <span>Search</span>
                        
                    </li>
                </NavLink>    
                </ul>    
            </nav>

            <nav className='flex justify-between border h-5/6 w-72 pl-6 rounded-lg my-3 mx-3 md:w-52 lg:w-72'>
                <ul className='hidden md:flex flex-col text-white my-4'>
                    <NavLink to='/sounds/library'
                    className={({isActive}) =>
                                      `duration-200 ${isActive ?
                                      "text-blue-600" : "text-gray-500"}`
                                  }
                    >
                        <li className='flex justify-center mt-5 p-2 mr-6 bg-white text-black rounded-full font-semibold cursor-pointer lg:mr-8 hover:bg-chose-30 hover:text-white'>
                            <span>Playlists</span>
                        </li>
                    </NavLink>
                    
                    
                    <li className='py-2 pl-5 -ml-6 mt-4 flex cursor-pointer hover:bg-chose-10 lg:w-70'>
                        <img src='https://images.indianexpress.com/2021/04/ARRahman.jpg'  className='w-12 h-12 rounded-full '/>
                        <span className='px-4 pt-2'>AR Rahman</span>
                    </li>

                    <li className='py-2 pl-5 -ml-6 mt-4 flex cursor-pointer hover:bg-chose-10'>
                        <img src='https://wallpapercave.com/wp/wp6441613.jpg' className='w-12 h-12 rounded-full '/>
                        <span className='px-4 pt-2'>Yuvan Shankar Raja</span>
                    </li>
                    
                    <li className='py-2 pl-5 -ml-6 mt-4 flex cursor-pointer hover:bg-chose-10'>
                        <img src='https://1.bp.blogspot.com/-ESeLwbNMxZY/Xq1SWT7LzCI/AAAAAAAABnA/MRyBXSz9DpAN9kqSiMuDwua4KiR6MDkogCLcBGAsYHQ/s1600/1567494100-ilayaraja111.jpg' className='w-12 h-12 rounded-full '/>
                        <span className='px-4 pt-2'>Ilayaraja</span>
                    </li>
                    
                    <li className='py-2 pl-5 -ml-6 mt-4 flex cursor-pointer hover:bg-chose-10'>
                        <img src='https://s1.ticketm.net/dam/a/743/8e929e37-a415-4cfe-9d6f-f8089b34b743_1821251_TABLET_LANDSCAPE_LARGE_16_9.jpg' className='w-12 h-12 rounded-full '/>
                        <span className='px-4 pt-2'>Santhosh Narayanan</span>
                    </li>
                    
                    <li className='py-2 pl-5 -ml-6 mt-4 flex cursor-pointer hover:bg-chose-10'>
                        <img src='https://s1.ticketm.net/dam/a/743/8e929e37-a415-4cfe-9d6f-f8089b34b743_1821251_TABLET_LANDSCAPE_LARGE_16_9.jpg' className='w-12 h-12 rounded-full '/>
                        <span className='px-4 pt-2'>Vijay Antony</span>
                    </li>
                    
                    <li className='py-2 pl-5 -ml-6 mt-4 flex cursor-pointer hover:bg-chose-10'>
                        <img src='https://tse1.mm.bing.net/th?id=OIP.zUDsiu1t-Sxke5V7C2nwQAHaEK&pid=Api&P=0&h=180' className='w-12 h-12 rounded-full '/>
                        <span className='px-4 pt-2'>Harris Jayaraj</span>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
    </div>
</header>
    
  )
}

export default Header