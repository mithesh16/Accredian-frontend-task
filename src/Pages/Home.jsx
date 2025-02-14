import React, { useState } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Nav from '../Components/Nav'
import HowSection from '../Components/HowSection'
import Benifits from '../Components/Benifits'
import FAQ from '../Components/FAQ'

import FooterSection from '../Components/FooterSection'
import { PhoneCall } from 'lucide-react'
const Home = () => {

  
  return (
    <div className='max-w-screen  '>
      <Header/>
      <Navbar/>
      <Nav/>
      <Hero />
      <HowSection/>
      <Benifits/>
      <FAQ/>
    <FooterSection/>
    

    </div>
  )
}

export default Home
