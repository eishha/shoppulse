import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import '../App.css'
import { Link } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
const NewArrivals = () => {
  const { products, loading } = useProducts()

  const getRandomProducts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, num)
  }

  if (loading) return <h1> Loading </h1>

  const randomThree = getRandomProducts(products, 3)

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-24 py-16 md:py-20">
      <h2 className="text-center heading text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {randomThree.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            img={product.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 md:mt-12">
        <Link to={'/products'}>
          <button className=" bg-black text-white rounded-full border border-gray-300 h-12 md:h-14 px-8 md:px-12 cursor-pointer hover:bg-gray-50 hover:text-black transition-colors">
            View All
          </button>
        </Link>
      </div>
      <div className="bg-gray-300 h-[1px] mt-12 md:mt-16"></div>
    </div>
  )
}

export default NewArrivals
