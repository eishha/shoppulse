import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  return (
    <Link to="/cart" className="relative">
      <img src="src/assets/cart.svg" alt="" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Link>
  )
}

export default CartIcon
