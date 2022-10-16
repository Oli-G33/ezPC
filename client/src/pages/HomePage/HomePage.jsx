import React from 'react';
import Filters from '../../components/Filters';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CartState } from '../../context/CartContext';
import './HomePage.scss';

const HomePage = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery }
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter(prod => prod.inStock);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(prod => prod.rating == byRating);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter(prod =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map(product => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
