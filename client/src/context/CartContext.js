import { createContext, useContext, useEffect, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();

const CartContext = ({ children }) => {
  const productList = [...Array(21)].map(() => ({
    _id: faker.datatype.number(10 ** 6),
    img: faker.image.abstract(1234, 2345, true),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(0, 1000, 2),
    inStock: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5])
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: productList,
    cart: []
    // },
    // () => {
    //   const localCartData = localStorage.getItem('cart');
    //   return localCartData ? JSON.parse(localCartData) : [];
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: ''
  });

  // SET LOCAL STORAGE:
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default CartContext;
