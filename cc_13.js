//U81623325
import React, { useState, useEffect } from 'react';
import Product from './Product';
import './App.css';

const API_URL = 'https://course-api.com/react-store-products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch products. Please try again later.');
      setLoading(false);
    }
  };

  const handleNext = () => {
    // Logic to handle next button
  };

  const handlePrevious = () => {
    // Logic to handle previous button
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="product-list">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <div className="navigation">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;