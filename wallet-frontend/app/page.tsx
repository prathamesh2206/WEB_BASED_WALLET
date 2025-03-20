import Cta from '@/components/landing/Cta'
import { WalletFAQ } from '@/components/landing/Faq'
import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'
import Hero from '@/components/landing/Hero'
import   Navbar from '@/components/landing/Nav'
import WhyChooseUS from '@/components/landing/WhyChooseUS'
import React from 'react'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Features />
      <WhyChooseUS />
      <Cta  />
      <WalletFAQ/>
      <Footer/>
    </div>
  )
}

export default Home