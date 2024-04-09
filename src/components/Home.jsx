import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Discover from '../Main/Discover'
import {genres} from '../assets/constants'
import Artists from '../Main/Artists'
import PopularAlbums from '../Main/PopularAlbums'
import Charts from '../Main/Charts'
import Podcasts from '../Main/Podcasts'
import PlayBackPlayer from './Music player/PlyBackPlayer'



function Home() {

const [open, setOpen] = useState(false)

    const discover = genres.map((genre)=>
                <Discover
                title={genre.title}
                />
                )
    const artists = genres.map((genre)=>
                <Artists
                title={genre.title}
                />
                )

    const albums = genres.map((genre)=>
                <PopularAlbums
                title={genre.title}
                />
                )

    const charts = genres.map((genre)=>
                <Charts
                title={genre.title}
                />
                ) 
      
    const podcasts = genres.map((genre)=>
                <Podcasts
                title={genre.title}
                />
                )                
    
    const time  = new Date().getHours()
    const msg = (time < 12 ? 'Good morning' : time > 12 ? 'Good Afternoon' : time > 16 ? 'Good Evening' : time > 19 ? 'Good Night' : 'Good Day')

  return (
    <div>
        <div className={`${open ? 'hidden' : 'block' }`}>
        <main className=' text-white md:hidden lg:hidden'>
            <div>
                <div className='p-4 pl-3'>
                    <h1 className='text-lg'>{msg}</h1>
                </div>

                <div className='h-56 p-4 '>
                    <ul className='grid grid-rows-3 grid-flow-col h-56 -mt-6 w-lvw -ml-4 gap-4 px-3 '>
                        <li className='p-2 flex cursor-pointer truncate bg-chose-10'>
                            <img src='https://images.indianexpress.com/2021/04/ARRahman.jpg'  className='w-12 h-12 rounded-md '/>
                            <span className='px-4 pt-2'>AR Rahman</span>
                        </li>
            
                        <li className='p-2 flex cursor-pointer truncate bg-chose-10'>
                            <img src='https://wallpapercave.com/wp/wp6441613.jpg' className='w-12 h-12 rounded-md '/>
                            <span className='px-4 pt-2'>Yuvan Shankar...</span>
                        </li>
                        
                        <li className='p-2 flex cursor-pointer truncate bg-chose-10'>
                            <img src='https://1.bp.blogspot.com/-ESeLwbNMxZY/Xq1SWT7LzCI/AAAAAAAABnA/MRyBXSz9DpAN9kqSiMuDwua4KiR6MDkogCLcBGAsYHQ/s1600/1567494100-ilayaraja111.jpg' className='w-12 h-12 rounded-md '/>
                            <span className='px-4 pt-2'>Ilayaraja</span>
                        </li>
                        
                        <li className='p-2 flex cursor-pointer truncate bg-chose-10 '>
                            <img src='https://s1.ticketm.net/dam/a/743/8e929e37-a415-4cfe-9d6f-f8089b34b743_1821251_TABLET_LANDSCAPE_LARGE_16_9.jpg' className='w-12 h-12 rounded-md '/>
                            <span className='px-4 pt-2'>Santhosh Na...</span>
                        </li>
            
                        <li className='p-2 flex cursor-pointer truncate bg-chose-10'>
                            <img src='https://s1.ticketm.net/dam/a/743/8e929e37-a415-4cfe-9d6f-f8089b34b743_1821251_TABLET_LANDSCAPE_LARGE_16_9.jpg' className='w-12 h-12 rounded-md '/>
                            <span className='px-4 pt-2'>Vijay Antony</span>
                        </li>
                    
                        <li className='p-2 flex cursor-pointer truncate bg-chose-10'>
                            <img src='https://tse1.mm.bing.net/th?id=OIP.zUDsiu1t-Sxke5V7C2nwQAHaEK&pid=Api&P=0&h=180' className='w-12 h-12 rounded-md '/>
                            <span className='px-4 pt-2'>Harris Jayaraj</span>
                        </li>
                    </ul>
                </div>  
            </div>
        </main>       
        
        <h3 className='text-white text-2xl font-bold mt-8 ml-1 lg:mt-3 pl-2 lg:ml-80'>
        Discover</h3>
        <div className='flex gap-6 overflow-x-auto w-lvw h-52 pl-2 ml-1 lg:ml-80 lg:h-64 lg:w-80 lg:overflow-hidden lg:gap-x-6' id='List' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            
            {discover}
        </div>
        
        <h3 className='text-white text-2xl font-bold mt-8 ml-1 lg:mt-3 pl-2 lg:ml-80'>Popular Albums</h3>
        <div className='flex gap-6 overflow-x-auto w-lvw h-52 pl-2 ml-1 lg:ml-80 lg:h-64 lg:w-80 lg:overflow-hidden lg:gap-x-6' id='List'style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {albums}
        </div>
        
        <h3 className='text-white text-2xl font-bold mt-2 pl-2 lg:ml-80'>Charts</h3>
        <div className='flex gap-6 overflow-x-auto w-lvw pl-2 h-52 overflow-y-hidden ml-1 lg:ml-80 lg:h-64 lg:w-80 lg:overflow-hidden lg:gap-x-6' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {charts}
        </div>

        <h3 className='text-white text-2xl font-bold mt-3 pl-2 lg:ml-80'>Popular Artists</h3>
        <div className='flex gap-6 overflow-x-auto w-lvw pl-2 h-52 overflow-y-hidden ml-1 lg:ml-80 lg:my-5 lg:h-64 lg:w-80 lg:overflow-hidden lg:gap-x-6' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {artists}
        </div>

        <h3 className='text-white text-2xl font-bold mt-2 pl-2 lg:ml-80'>Podcasts</h3>
        <div className='flex gap-6 overflow-x-auto w-lvw pl-2 h-52 overflow-y-hidden ml-1 lg:ml-80 lg:h-64 lg:w-80 lg:overflow-hidden lg:gap-x-6' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {podcasts}
        </div>
        
        </div>                
        
        <div>
            <PlayBackPlayer props={{open, setOpen}}/>   
        </div>
            
  
        
        
        
    </div>
  )
}

export default Home