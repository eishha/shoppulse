import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
import useProducts from '../hooks/useProducts'

const Category = () => {
  const { category } = useParams()
  const { products, loading } = useProducts()

  // Filter products by category
  const categoryProducts = products.filter(
    (product) => product.category === category
  )

  const formatName = (name) => {
    if (name === "men's clothing") return "Men's Fashion"
    if (name === "women's clothing") return "Women's Fashion"
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold mt-4">{formatName(category)}</h1>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p>Loading products...</p>
        </div>
      ) : categoryProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">No products found in this category</p>
          <Link
            to="/products"
            className="bg-black text-white px-6 py-3 rounded-full inline-block"
          >
            Browse All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
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
      )}
    </div>
  )
}

export default Category
