import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Search from './components/Search'
import Mlibrary from './components/Mlibrary'
import Front from './components/Front'

const router = createBrowserRouter([
  {
    path: '/sounds/',
    element: <Front/>
  },
  {
    path: '/sounds//',
    element : <Layout/>,
    children: [{
      path: '/sounds/home',
      element: <Home/>
    },
    {
      path: '/sounds/search',
      element: <Search/>
    },
    {
      path: '/sounds/library',
      element: <Mlibrary/>
    },
      
    ]
  },
  // {
  //   path: '/sounds/player',
  //   element: <Player/>
  // }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
