import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
import useProducts from '../hooks/useProducts'
import useSearch from '../hooks/useSearch'

const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const { products, loading } = useProducts()
  const { searchResults } = useSearch(products)

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  )

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-lg">Loading products...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold mt-4">
          Search Results for "{query}"
        </h1>
        <p className="text-gray-600 mt-2">
          Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">No products found for "{query}"</p>
          <p className="text-gray-600 mb-8">Try searching for something else</p>
          <Link
            to="/products"
            className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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

export default Search 