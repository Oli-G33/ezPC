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

const Header = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [showBasic, setShowBasic] = useState(false);
  const [extendNavbar, setExtendNavbar] = useState(false);

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
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <a href="/">
              <Logo src={LogoImg}></Logo>
            </a>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              {(user && (
                <>
                  <NavbarLink to="/">{user.firstName}'s Profile</NavbarLink>
                  <NavbarLink to="/cart">
                    <FaShoppingCart color="white" fontSize="25px" />
                    <NavBadge>{cart.length}</NavBadge>
                  </NavbarLink>
                  <NavbarLink>
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
                  <NavbarLink to="/login">Log In</NavbarLink>
                  <NavbarLink to="/register">Register</NavbarLink>
                  <NavbarLink to="/login">
                    <FaShoppingCart color="white" fontSize="25px" />
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
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/login">Log in</NavbarLinkExtended>
            <NavbarLinkExtended to="/register">Sign up</NavbarLinkExtended>
            <NavbarLinkExtended>
              {' '}
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
            </NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default Header;
