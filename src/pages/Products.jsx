import useProducts from '../hooks/useProducts'
import React from 'react'
import ProductCard from '../component/ProductCard'

const Products = () => {
  const { products, loading, error } = useProducts()

  if (loading)
    return (
      <div className="container mx-auto py-20 text-center">
        Loading products...
      </div>
    )
  if (error)
    return (
      <div className="container mx-auto py-20 text-center">Error: {error}</div>
    )

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-4">Filters</h3>
         
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-gray-600 hover:text-black">
                    Men's Clothing
                  </button>
                </li>
                <li>
                  <button className="text-gray-600 hover:text-black">
                    Women's Clothing
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Price</h4>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">All Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
        </div>
      </div>
    </div>
  )
}

export default Products
