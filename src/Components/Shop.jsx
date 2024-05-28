import React, { useEffect, useState } from 'react';
import PerfumeCard from './PerfumeCard';
import Basket from './Basket';
import { CartProvider } from 'react-use-cart';
import './Style.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('parfum');
  const [search, setSearch] = useState('');

  const fetchProducts = async (searchQuery) => {
    const url = `https://sephora.p.rapidapi.com/us/products/v2/search?q=${searchQuery}&pageSize=60&currentPage=1`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a0fc6069dcmshc30c5a65515040fp1f9b14jsn296ef487cfa3',
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setProducts(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <CartProvider>
      <div>
        <form onSubmit={handleSearch} className="search_form">
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for perfumes"
            className="search_input"
          />
          <button type="submit" className="search_button">Search</button>
        </form>
        <div className="perfume_cards">
          {products.map((product) => (
            <PerfumeCard
              key={product.productId}
              productId={product.productId}
              image={product.heroImage}
              name={product.displayName}
              description={product.brandName}
              price={product.currentSku.listPrice}
            />
          ))}
        </div>
        {/* <Basket /> */}
      </div>
    </CartProvider>
  );
};

export default Shop;
