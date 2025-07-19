

import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from './cart/CartSlice'

const ProductCard = ({ id, title, price, rating, img }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(
      addItemToCart({
        id,
        title,
        price,
        image: img,
        quantity: 1,
      })
    )
  }

  return (
    <Link to={`/product/${id}`} className="block group mx-2 md:mx-6">
      <div className="border border-gray-200 h-48 md:h-[300px] rounded-2xl flex items-center justify-center overflow-hidden p-2 md:p-4 transition group-hover:border-gray-800">
        <img
          src={img}
          alt={title}
          className="object-contain h-full transition group-hover:scale-105"
        />
      </div>
      <div className="mt-3 md:mt-4">
        <h3 className="font-bold text-sm md:text-lg group-hover:text-blue-600 transition line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 md:w-4 md:h-4 ${
                i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs md:text-sm ml-1 md:ml-2 text-gray-600">({rating})</span>
        </div>
        <p className="text-lg md:text-xl font-bold mt-1">${price}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-2 w-full bg-black text-white py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm md:text-base"
      >
        Add to Cart
      </button>
    </Link>
  )
}

export default ProductCard
