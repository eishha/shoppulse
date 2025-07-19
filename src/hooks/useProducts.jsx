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

        // const [menRes, womenRes] = await Promise.all([
        //   fetch("https://fakestoreapi.com/products/category/men's%20clothing"),
        //   fetch(
        //     "https://fakestoreapi.com/products/category/women's%20clothing"
        //   ),
        // ])

        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        // if (!menRes.ok)
        //   throw new Error(`Men's products fetch failed: ${menRes.status}`)
        // if (!womenRes.ok)
        //   throw new Error(`Women's products fetch failed: ${womenRes.status}`)

        // const menData = await menRes.json()
        // const womenData = await womenRes.json()

        // const allProducts = [...menData, ...womenData]
        // console.log(allProducts)

        // setProducts(allProducts)
        console.log(data)
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
