import React from 'react'
import Hero from './Hero'
import InfoSection from './InfoSection'
import ScrollToTop from './ScrollToTop'
import TopFooter from './TopFooter';
import Footer from './Footer';
import MainNav from './MainNav';
const Home = () => {
  return (
    <div>
       <MainNav />
         <Hero />
        <InfoSection />
        <ScrollToTop />
        <TopFooter />
    <Footer /> 
    </div>
  )
}

export default Home