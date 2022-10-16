import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();

const CartContext = ({ children }) => {
  const productList = [...Array(21)].map(() => ({
    _id: faker.datatype.number(10 ** 10),
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
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: ''
  });

  // SET LOCAL STORAGE:
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   setItems(cart);
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

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
