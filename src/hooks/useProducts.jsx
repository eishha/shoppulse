import { useState, useEffect } from 'react'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)

        const cachedProducts = sessionStorage.getItem('cachedProducts')
        if (cachedProducts) {
          setProducts(JSON.parse(cachedProducts))
          setLoading(false)
          return
        }

      

        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
      

        setProducts(data)

        sessionStorage.setItem('cachedProducts', JSON.stringify(data))
      } catch (err) {
        setError(err.message)
        console.error('Product fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
