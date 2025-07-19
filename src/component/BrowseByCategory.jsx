import React from 'react'
import { Link } from 'react-router-dom'

const BrowseByCategory = () => {
  // API categories mapped to display names
  const categories = [
    {
      id: "men's clothing",
      name: 'Men Clothing',
      image: 'public/categoryimages/image-11.png',
    },
    {
      id: "women's clothing",
      name: 'Women Clothing',
      image: 'public/categoryimages/image-12.png',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-[#F0F0F0] rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="heading">Shop by Category</h2>
        <p className="lightText">
          Discover our wide range of products organized by category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.id}`}
            className="block group w-full max-w-md"
          >
            <div
              className={`w-full rounded-xl p-4 flex flex-col h-48 md:h-56 transition-all duration-300 group-hover:shadow-lg hover:bg-blue-950 bg-cover`}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-blue-300">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BrowseByCategory
