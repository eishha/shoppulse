import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const categories = ["men's clothing", "women's clothing"];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow font-plusjakarta sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-montserrat font-extrabold text-2xl md:text-4xl">
          SHOPPULSE
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-row font-light gap-6 items-center">
          <li><Link to="/products">Shop</Link></li>
          <li><Link to={`/category/${categories[0]}`}>Men</Link></li>
          <li><Link to={`/category/${categories[1]}`}>Women</Link></li>
          <li><Link to="/products">New Arrivals</Link></li>
        </ul>

        {/* Search and Cart */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearchSubmit} className="hidden md:block">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="w-64 bg-[#F0F0F0] p-2 rounded-full placeholder-gray-300 px-4"
            />
          </form>
          <CartIcon />
          {/* Hamburger */}
          <button
            className="md:hidden text-2xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                onChange={e => setSearchTerm(e.target.value)}
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
