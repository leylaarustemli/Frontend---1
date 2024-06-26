import React from 'react'
import Header from '../../Layout/site/Header/Header'
import Footer from '../../Layout/site/Footer/Footer'
import { Outlet } from 'react-router'
const SiteRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot