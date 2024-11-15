import React from 'react'
import Navigation from '../partials/Navigation'
import Footer from '../partials/Footer'
import Heading from '../partials/Heading'
import BestsellersTable from './BestsellersTable'
import BestsellersModalView from './BestsellersModalView'
import BestsellersModalAdd from './BestsellersModalAdd'

const Bestsellers = () => {
  return (
    <section className="flex  min-h-screen bg-secondary">
    <aside className="bg-primary text-dark basis-[200px] border-r border-line">
      <Navigation menu="bestsellers"/>
    </aside>
    <main className="basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]">
      <Heading title="Best Sellers" subtitle="Manage bests sellers list"/>

     <BestsellersTable/>
    
      <Footer />
    </main>

    {/* <BestsellersModalView/> */}
    {/* <BestsellersModalAdd/> */}
  </section>
  )
}

export default Bestsellers