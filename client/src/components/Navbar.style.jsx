import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${props => (props.extendNavbar ? '100vh' : '80px')};
  background-color: #000040;
  display: flex;
  flex-direction: column;
  position: sticky;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 80px;
  height: auto;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 701px) {
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 701px) {
    display: none;
  }
`;

export const NavBadge = styled.span`
  margin-left: -10px;
  padding: 0 3px;
  vertical-align: top;
  background-color: red;
  color: white;
  font-size: 12px;
  border-radius: 24px;
  border: 2px solid white;

  @media (max-width: 700px) {
    font-size: 24px;
    padding: 0 6px;
    margin-left: -16px;
  }
`;

export const CarrouselBtn = styled.button`
  border: 2px solid white;
  background-color: Transparent;
  color: white;
  text-decoration: none;
`;
