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
  MDBInputGroup,
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
    <MDBNavbar
      expand="lg"
      dark
      bgColor="dark"
      className="d-flex justify-content-between align-items-center"
    >
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
                    <div className="border d-flex align-self-center">
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
                    f
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
                        <MDBNavbarLink
                          role="link"
                          className="d-flex justify-content-center"
                        >
                          <MDBDropdownItem role="link">
                            <Button as={NavLink} to="/cart">
                              Go To Cart
                            </Button>
                          </MDBDropdownItem>
                        </MDBNavbarLink>
                      </>
                    ) : (
                      <div className="text-center">
                        <span>Cart is Empty!</span>
                      </div>
                    )}
                  </MDBDropdownMenu>
                </div>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBInputGroup className="mb-3">
            <input
              className="form-control"
              placeholder="Search products..."
              onChange={e => {
                productDispatch({
                  type: 'FILTER_BY_SEARCH',
                  payload: e.target.value
                });
              }}
            />
            <MDBBtn outline>Search</MDBBtn>
          </MDBInputGroup>
        </MDBCollapse>
      </div>
    </MDBNavbar>
  );
};

export default Header;
