import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { TbLogout } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { formatPrice } from '../utils/formatPrice';

import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';
import { CartState } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';
// import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';

const Header = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [showBasic, setShowBasic] = useState(false);

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
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">ezSHOP</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <div className="navbar-align">
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              {(user && (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink to="/">
                      {user.firstName}'s Profile
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <IconContext.Provider
                      value={{
                        color: 'red',
                        size: '1.5em'
                      }}
                    >
                      <div>
                        <TbLogout
                          style={{ cursor: 'pointer' }}
                          onClick={handleSignOut}
                        >
                          Sign Out
                        </TbLogout>
                      </div>
                    </IconContext.Provider>
                  </MDBNavbarItem>
                </>
              )) || (
                <>
                  <MDBNavbarLink href="/login">Log In</MDBNavbarLink>
                  <MDBNavbarLink href="/register">Register</MDBNavbarLink>
                </>
              )}

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBBtn className="bg-success">
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link"
                      role="button"
                    >
                      <FaShoppingCart color="white" fontSize="25px" />
                      <Badge>{cart.length}</Badge>
                    </MDBDropdownToggle>
                  </MDBBtn>
                  <div>
                    <MDBDropdownMenu style={{ minWidth: 370 }} align="end">
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
                                <span>{formatPrice(product.price)}</span>
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
                          <MDBNavbarLink role="link">
                            <MDBDropdownItem role="link">
                              <Button
                                as={NavLink}
                                to="/cart"
                                style={{ width: '85%', margin: '0 10px' }}
                              >
                                Go To Cart
                              </Button>
                            </MDBDropdownItem>
                          </MDBNavbarLink>
                        </>
                      ) : (
                        <span style={{ padding: 10 }}>Cart is Empty!</span>
                      )}
                    </MDBDropdownMenu>
                  </div>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                style={{ width: 300 }}
                type="search"
                className="form-control"
                placeholder="Search products..."
                aria-label="Search"
                onChange={e => {
                  productDispatch({
                    type: 'FILTER_BY_SEARCH',
                    payload: e.target.value
                  });
                }}
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
