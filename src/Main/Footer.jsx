import React from 'react'
import {Link } from 'react-router-dom'
import { FaLinkedinIn, FaRegCopyright,FaFile } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

function Footer() {
    //  links for my profile
    const portfolio = 'https://hexplorer07.github.io/My-Portfolio/'
    const landingPage = 'https://chandru070.github.io/first-Design/'
    const naukri = 'https://www.naukri.com/mnjuser/profile'
    const linkedIn = 'https://www.linkedin.com/in/hariharachandru-front-end-developer/'
    const resume = 'https://drive.google.com/file/d/1OxG5aSF2H2wLWJr0BAtE_pl_eroDR33a/view?usp=drive_link'
    const github = 'https://github.com/Chandru070'

  return (
    <div className='hidden md:block lg:flex flex-col justify-center ml-80 text-gray-400  h-56 p-5 mt-14'>
        <div className=''>
                <ul className='flex justify-center gap-16 '>
                    <li className='hover:text-white' >About</li>

                    <Link to={portfolio} className='hover:text-white'>
                        <li>Portfolio</li>
                    </Link>

                    <Link to={landingPage} className='hover:text-white'>
                        <li>Landing Page</li>
                    </Link>
                    
                    <Link to={naukri} className='hover:text-white'>
                        <li>Naukri</li>
                    </Link>
                    
                </ul>
        </div>

        <div>
            <ul className='flex justify-center gap-8 my-5'>
            <Link to={linkedIn} className='hover:text-white'>
                <li className=' rounded-full p-4 hover:bg-slate-800'>
                    <FaLinkedinIn className='w-5 h-5' />
                </li>
            </Link>
                
            <Link to={resume} className='hover:text-white'>
                <li className=' rounded-full p-4 hover:bg-slate-800'>
                    <FaFile className='w-5 h-5'/>
                </li>
            </Link>
                
            <Link to={github} className='hover:text-white'>
                <li className='rounded-3xl p-4 hover:bg-slate-800'>
                <VscGithubInverted className='w-5 h-5'/>
                </li>
            </Link>                        
            </ul>
        </div>
        
        <hr className='border border-gray-900'></hr>
        <div className='flex justify-center mt-5'>
            <div className='m-1'><FaRegCopyright /></div>
            <p> 2024 | All rights reserved</p>
            
        </div>
            
        </div>
  )
}

export default Footer