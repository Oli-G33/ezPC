import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';
import { IconContext } from 'react-icons';

import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';
import { CartState } from '../context/CartContext';
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar
} from 'react-bootstrap';

const Header = () => {
  const { user, setUser } = useContext(AuthenticationContext);

  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
    });
  };

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Nav>
          <Link to="/">Home</Link>
          {(user && (
            <>
              <Link to="/">{user.firstName}'s Profile</Link>
              <IconContext.Provider
                value={{ color: 'red', className: 'global-class-name' }}
              >
                <div>
                  <GrLogout
                    className="logout"
                    style={{ cursor: 'pointer' }}
                    color="white"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </GrLogout>
                </div>
              </IconContext.Provider>
            </>
          )) || (
            <>
              <Link to="/log-in">Log In</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          {useLocation().pathname.split('/')[1] !== 'cart' && (
            <Navbar.Text className="search">
              <FormControl
                style={{ width: 300 }}
                type="search"
                placeholder="Search a product..."
                className="m-auto"
                aria-label="Search"
                onChange={e => {
                  productDispatch({
                    type: 'FILTER_BY_SEARCH',
                    payload: e.target.value
                  });
                }}
              />
            </Navbar.Text>
          )}
          <Dropdown>
            <Dropdown.Toggle variant="success" className="toggle">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map(product => (
                    <span className="cartitem" key={product._id}>
                      <img
                        src={product.img}
                        className="cartItemImg"
                        alt={product.name}
                      />
                      <div className="cartItemDetail">
                        <span>{product.name}</span>
                        <span>{product.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: product
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: '85%', margin: '0 10px' }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
