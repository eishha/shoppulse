import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';
import useProducts from '../hooks/useProducts';
import useSearch from '../hooks/useSearch';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const categories = ["men's clothing", "women's clothing"];
  const { products } = useProducts();
  const { searchResults, setSearchQuery } = useSearch(products);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setSearchQuery('');
      setShowSearchResults(false);
      setMenuOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchQuery(value);
    setShowSearchResults(value.length > 0);
  };

  const handleSearchResultClick = (product) => {
    navigate(`/product/${product.id}`);
    setSearchTerm('');
    setSearchQuery('');
    setShowSearchResults(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow font-plusjakarta sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        
        <Link to="/" className="font-montserrat font-extrabold text-2xl md:text-4xl">
          SHOPPULSE
        </Link>

        
        <ul className="hidden md:flex flex-row font-light gap-6 items-center">
          <li><Link to="/products">Shop</Link></li>
          <li><Link to={`/category/${categories[0]}`}>Men</Link></li>
          <li><Link to={`/category/${categories[1]}`}>Women</Link></li>
          <li><Link to="/products">New Arrivals</Link></li>
        </ul>

       
        <div className="flex items-center gap-4">
          <div ref={searchRef} className="hidden md:block relative">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="w-64 bg-[#F0F0F0] p-2 rounded-full placeholder-gray-300 px-4"
              />
            </form>
            
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-60 overflow-y-auto">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSearchResultClick(product)}
                    className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-10 h-10 object-contain mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {product.title}
                      </p>
                      <p className="text-sm text-gray-500">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <CartIcon />
          
          <button
            className="md:hidden text-2xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-white shadow px-4 py-2 space-y-2">
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to={`/category/${categories[0]}`} onClick={() => setMenuOpen(false)}>Men</Link></li>
          <li><Link to={`/category/${categories[1]}`} onClick={() => setMenuOpen(false)}>Women</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>New Arrivals</Link></li>
          <li>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="w-full bg-[#F0F0F0] p-2 rounded-full placeholder-gray-300 px-4"
              />
            </form>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
