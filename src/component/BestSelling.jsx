import ProductCard from './ProductCard'
import '../App.css'
import useProducts from '../hooks/useProducts'
import { Link } from 'react-router-dom'

const BestSelling = () => {
  const { products, loading } = useProducts()

  const filteredProduct = products.filter(
    (filterProduct) => filterProduct.rating.count >= 400
  )
  const getRandomProducts = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const topThree = getRandomProducts(filteredProduct, 3)

  if (loading) return <h1>Loading...</h1>
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-24 py-16 md:py-20">
      <h2 className="text-center heading text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12">TOP SELLING</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        {topThree.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title.split(' ').slice(0, 3).join(' ')}
            price={product.price}
            rating={product.rating.rate}
            img={product.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 md:mt-12">
        <Link to={'/products'}>
          <button className="rounded-full border border-gray-300 h-12 md:h-14 px-8 md:px-12 cursor-pointer hover:bg-gray-50 transition-colors">
            View All
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BestSelling
