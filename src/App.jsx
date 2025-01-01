import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Slideshow from './components/SlideShow';
import Founders from './components/Founders';
import Constact from './components/Contact';
import Footer from './components/Footer';
import './global.css';

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Black Essential Tee",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
  },
  {
    id: 3,
    name: "Navy Crew Neck",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"
  },
  {
    id: 4,
    name: "Gray Premium Tee",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820"
  }, {
    id: 5,
    name: "Classic White T-Shirt",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id:6,
    name: "Black Essential Tee",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
  },
  {
    id: 7,
    name: "Navy Crew Neck",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a"
  },
  {
    id: 8,
    name: "Gray Premium Tee",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820"
  },
  
];

const images = [
  "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1"

];

export default function App() { 
  const [cart, setCart] = useState([]); 
  const [favorites, setFavorites] = useState([]); 

  const addToCart = (product) => { 
    setCart([...cart, product]); }; 

    const toggleFavorite = (product) => { 
      if (favorites.some((fav) => fav.id === product.id)) { 
        setFavorites(favorites.filter((fav) => fav.id !== product.id)); 
      } else { 
        setFavorites([...favorites, product]); 
      } 
    };

    return ( 
    <> 
    <Navbar cartCount={cart.length} favoritesCount={favorites.length} /> 
    <Slideshow images={images} />  
    <ProductCard products={products} addToCart={addToCart} toggleFavorite={toggleFavorite} /> 
    <Founders />
    <Constact />
    <Footer />
    </> 

    ); 
  }