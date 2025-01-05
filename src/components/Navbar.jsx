import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart } from 'lucide-react';
import logo from '../assets/com-logo-removebg.png';

export default function Navbar({ cartCount, favoritesCount, onCartClick, onFavoritesClick }) {
  return (
    <div className="bg-gray-900 fixed top-0 w-full z-20 h-18">
      <div className="absolute p-2 left-4 flex items-center">
        <img src={logo} className="w-16" alt="Logo" />
        <p className="ml-2 text-2xl font-bold text-white">SSR Prints</p>
      </div>
      <div className="flex justify-center py-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-black"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-6 absolute right-8 top-1.5 p-4">
        <button className="text-white hover:text-gray-600 relative" onClick={onFavoritesClick}>
          <Heart className="h-6 w-6" />
          {favoritesCount > 0 && (
            <span className="absolute -top-2 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {favoritesCount}
            </span>
          )}
        </button>
        <button className="text-white hover:text-gray-600 relative" onClick={onCartClick}>
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <Link to="/login" className="text-white hover:text-gray-600">
          Login/Signup
        </Link>
      </div>
    </div>
  );
}
