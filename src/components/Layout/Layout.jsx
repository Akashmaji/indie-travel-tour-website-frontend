import React from 'react'
import './Layout.css'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import video12 from './../../assets/images/hero-video.mp4'

const Layout = () => {
   return (
      <>
      {/*<div className='La'>
         <div className='ov'></div>
         <video className="Ak"src={video12} autoPlay loop muted />
   <div className="con">*/}
          <Header />
          <Routers />
          <Footer />
          </>
   )
}

export default Layout