import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { addItemToCart } from '../component/cart/CartSlice'
import { useDispatch } from 'react-redux'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addItemToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        })
      )
    }
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

        if (!response.ok) {
          throw new Error('Product not found')
        }

        const data = await response.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading)
    return (
      <div className="container mx-auto py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-lg">Loading product details...</p>
      </div>
    )

  if (error)
    return (
      <div className="container mx-auto py-20 text-center">
        <div className="text-5xl mb-4">😞</div>
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6 text-gray-600">{error}</p>
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
        >
          Browse Products
        </Link>
      </div>
    )

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-4">
        <Link to="/products" className="text-gray-500 hover:text-black">
          &larr; Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 object-contain"
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <div className="flex items-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating.rate)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold mb-6">${product.price}</p>

          <p className="text-gray-700 mb-8">{product.description}</p>

          <div className="flex items-center mb-8">
            <span className="mr-4">Quantity:</span>
            <div className="flex items-center border rounded-full">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 text-gray-500 hover:text-black"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 text-gray-500 hover:text-black"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex-1 min-w-[200px]"
            >
              Add to Cart
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-gray-100 transition flex-1 min-w-[200px]">
              Buy Now
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-bold mb-4">Product Details</h3>
            <p className="text-gray-600">
              <span className="font-medium">Category:</span> {product.category}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-500">Related Products</p>
          </div>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-500">Related Products</p>
          </div>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-500">Related Products</p>
          </div>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-500">Related Products</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
