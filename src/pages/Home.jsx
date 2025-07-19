import React from 'react'
import NewArrivals from '../component/NewArrivals'
import BestSelling from '../component/BestSelling'
import Testimonials from '../component/Testimonials'
import Hero from '../component/Hero'
import BrowseByCategory from '../component/BrowseByCategory'
import BrandBanner from '../component/BrandBanner'

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandBanner />
      <NewArrivals />
      <BestSelling />
      <BrowseByCategory />
      <Testimonials />
    </div>
  )
}

export default Home
