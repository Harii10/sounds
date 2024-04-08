import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Search from './components/Search'
import Mlibrary from './components/Mlibrary'
import Front from './components/Front'


const router = createBrowserRouter([
  {
    path: '',
    element: <Front/>
  },
  {
    path: '/',
    element : <Layout/>,
    children: [{
      path: 'home',
      element: <Home/>
    },
    {
      path: 'search',
      element: <Search/>
    },
    {
      path: 'library',
      element: <Mlibrary/>
    }
      
    ]
  }
]

    
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
