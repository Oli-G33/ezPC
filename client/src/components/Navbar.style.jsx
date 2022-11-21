import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${props => (props.extendNavbar ? '100vh' : '60px')};
  background-color: black;
  display: flex;
  flex-direction: column;
  position: sticky;

  @media (min-width: 700px) {
    height: 60px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
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
  margin-left: -7px;
  padding: 0 2px;
  vertical-align: top;
  background-color: red;
  color: white;
  font-size: 8px;
  border-radius: 24px;
  border: 2px solid white;
`;