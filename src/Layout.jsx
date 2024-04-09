import Header from './Main/Header'
import Footer from './Main/Footer'
import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react'

function Layout() {

return (
    <>
        <Header />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout