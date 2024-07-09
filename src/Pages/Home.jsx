import React, { useState } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Nav from '../Components/Nav'

const Home = () => {

  
  return (
    <div className='max-w-screen'>
      <Header/>
      <Navbar/>
      <Nav/>
      <Hero />
      

    </div>
  )
}

export default Home
