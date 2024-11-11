import { Dot } from 'lucide-react'
import React from 'react'
import Header from './Header'


const Banner = () => {
  return (
    <section className="bg-[url('./public/img/banner-bg.jpg')] bg-cover bg-no-repeat bg-[left_top_-400px] min-h-screen relative ">
      <div className="container">
       
        <Header/>


      </div>
    </section>
  )
}


export default Banner




