import { useState, useEffect } from 'react'

export default function useSearch(products) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )

    setSearchResults(results.slice(0, 5)) 
    setShowResults(true)
  }

  
  useEffect(() => {
    if (!searchQuery) {
      setSearchResults([])
      return
    }

    const handler = setTimeout(() => {
      performSearch(searchQuery)
    }, 300)

    return () => clearTimeout(handler)
  }, [searchQuery, products])

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    showResults,
    setShowResults,
    performSearch,
  }
}
