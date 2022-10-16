import React from 'react';
import Filters from '../../components/Filters';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CartState } from '../../context/CartContext';
import './HomePage.scss';

const HomePage = () => {
  const {
    state: { products }
  } = CartState();
  console.log(products);

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map(product => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
