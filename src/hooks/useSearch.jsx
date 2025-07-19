import { useState, useEffect } from 'react'

export default function useSearch(products) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  // Search function
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )

    setSearchResults(results.slice(0, 5)) // Show top 5 results
    setShowResults(true)
  }

  // Debounce search to avoid excessive API calls
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
