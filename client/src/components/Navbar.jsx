import { useContext, useState } from 'react';
import LogoImg from '../assets/Logo18.png';
import { FaShoppingCart } from 'react-icons/fa';
import { TbLogout } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import AuthenticationContext from '../context/authentication';
import { signOutUser } from './../services/authentication';
import { CartState } from '../context/CartContext';
import {
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
  NavBadge
} from './Navbar.style';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [extendNavbar, setExtendNavbar] = useState(false);

  const {
    state: { cart }
  } = CartState();

  const handleSignOut = () => {
    signOutUser().then(() => {
      setUser(null);
    });
  };

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              {(user && (
                <>
                  <NavbarLink to="/products">Products</NavbarLink>
                  <NavbarLink to="/">{user.firstName}'s Profile</NavbarLink>
                  <NavbarLink to="/cart">
                    <FaShoppingCart color="white" fontSize="25px" />
                    <NavBadge>{cart.length}</NavBadge>
                  </NavbarLink>
                  <NavbarLink to="/">
                    <IconContext.Provider
                      value={{
                        color: 'red',
                        size: '1.5em'
                      }}
                    >
                      <div className=" d-flex align-self-center">
                        <TbLogout
                          style={{ cursor: 'pointer' }}
                          onClick={handleSignOut}
                        >
                          Sign Out
                        </TbLogout>
                      </div>
                    </IconContext.Provider>
                  </NavbarLink>
                </>
              )) || (
                <>
                  <NavbarLink to="/products">Products</NavbarLink>
                  <NavbarLink to="/login">Log In</NavbarLink>
                  <NavbarLink to="/register">Register</NavbarLink>
                  <NavbarLink to="/cart">
                    <FaShoppingCart color="white" fontSize="35px" />
                    <NavBadge>{cart.length}</NavBadge>
                  </NavbarLink>
                </>
              )}
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar(curr => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <Link to="/">
              <Logo src={LogoImg}></Logo>
            </Link>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            {(user && (
              <>
                <NavbarLinkExtended
                  to="/products"
                  onClick={() => {
                    setExtendNavbar(curr => !curr);
                  }}
                >
                  Products
                </NavbarLinkExtended>
                <NavbarLinkExtended
                  to="/"
                  onClick={() => {
                    setExtendNavbar(curr => !curr);
                  }}
                >
                  {user.firstName}'s Profile
                </NavbarLinkExtended>
                <NavbarLinkExtended
                  to="/cart"
                  onClick={() => {
                    setExtendNavbar(curr => !curr);
                  }}
                >
                  <FaShoppingCart color="white" fontSize="75px" />
                  <NavBadge>{cart.length}</NavBadge>
                </NavbarLinkExtended>
                <NavbarLinkExtended to="/">
                  <IconContext.Provider
                    value={{
                      color: 'red',
                      size: '2.5em'
                    }}
                  >
                    <div className=" d-flex align-self-center">
                      <TbLogout
                        style={{ cursor: 'pointer' }}
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </TbLogout>
                    </div>
                  </IconContext.Provider>
                </NavbarLinkExtended>
              </>
            )) || (
              <>
                <NavbarLinkExtended
                  onClick={() => {
                    setExtendNavbar(curr => !curr);
                  }}
                  to="/products"
                >
                  Products
                </NavbarLinkExtended>
                <NavbarLinkExtended
                  onClick={() => {
                    setExtendNavbar(curr => !curr);
                  }}
                  to="/login"
                >
                  Log In
                </NavbarLinkExtended>
                <NavbarLinkExtended
                  onClick={() => {
                    setExtendNavbar(curr => !curr);
                  }}
                  to="/register"
                >
                  Register
                </NavbarLinkExtended>
                <NavbarLinkExtended
                  onClick={() => {
                    setExtendNavbar(curr => !curr);
                  }}
                  to="/cart"
                >
                  <FaShoppingCart color="white" fontSize="75px" />
                  <NavBadge>{cart.length}</NavBadge>
                </NavbarLinkExtended>
              </>
            )}
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default Header;
