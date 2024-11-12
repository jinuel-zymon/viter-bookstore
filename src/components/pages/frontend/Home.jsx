import React from 'react'
import Header from './Header'
import BookSlider from './BookSlider'
import BookSliderBest from './BookSliderBest'
import Footer from './Footer'
import Cart from './Cart'
import AdSlider from './AdSlider'

const Home = () => {
  return (
    <>
    <Header/>
    <AdSlider/>
    <BookSliderBest/>
    <BookSlider/>
    <BookSlider/>
    <BookSlider/>
    <Footer/>
    {/* <Cart/> */}
    </>
  )
}

export default Home
