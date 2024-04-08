import Header from './Main/Header'
import Footer from './Main/Footer'
import {Outlet} from 'react-router-dom'


function Layout() {

    
return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout