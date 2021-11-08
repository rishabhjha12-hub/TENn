import React from 'react'
import Navbar from './navbar'
import './index.css'
import Contact from './contact'
import Header from './Header'
import Howitworks from './Howitworks'
import Aboutus from './Aboutus'
import Testimonial from './Testimonial'
import Nextbig from './nextbig'
import Footer from './footer'
import Discord from './Discord'





const Home = () => {
  return (
    <div>
      
       
       <Navbar/>
       <Header/>
       <Aboutus/>
        <Discord/> 
       <Contact/>
        <Howitworks/> 
        <Testimonial/>
       <Nextbig/>
       
       <Footer/>
       
       
      

      
    </div>
  )
}





export default Home