import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  clearCart,
} from '../component/cart/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { items, totalQuantity, totalAmount } = cart

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link
            to="/products"
            className="bg-black text-white px-6 py-3 rounded-full inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b border-gray-100 py-4"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-3 py-1 bg-gray-100 rounded-l"
                      onClick={() => dispatch(removeItemFromCart(item.id))}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-y border-gray-100">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-gray-100 rounded-r"
                      onClick={() =>
                        dispatch(
                          addItemToCart({
                            id: item.id,
                            title: item.title,
                            price: item.price,
                            image: item.image,
                            quantity: 1,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="w-24 text-right font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="ml-4 text-red-500"
                    onClick={() => dispatch(deleteItemFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 text-right">
              <button
                className="text-red-500"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
              <Link
                to="/products"
                className="block text-center mt-4 text-blue-600 hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
