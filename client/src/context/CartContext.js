import { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';

const Cart = createContext();

const CartContext = ({ children }) => {
  const productList = [...Array(21)].map(() => ({
    _id: faker.datatype.number(10 ** 10),
    img: faker.image.abstract(1234, 2345, true),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(0, 1000, 2, '€'),
    inStock: faker.random.numeric(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5])
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: productList,
    cart: []
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default CartContext;
