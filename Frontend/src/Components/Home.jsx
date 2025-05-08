import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Content from '../Components/Content'
import Hookcontent from '../Components/Hookcontent'
import Content2 from '../Components/Content2'
import Call from '../Components/Call'
import Content3 from '../Components/Content3'
import Services from '../Components/Services'
import Price from '../Components/Price'
import Footer from '../Components/Footer'


function Home() {
  return (
    <>
 
      <Navbar />
      <Carousel />
      <Content />
      <Hookcontent />
      <Content2 />
      <Call />
      <Content3 />
      <Services />
      <Price />
      <Footer/>
     
    </>
  )
}




export default Home