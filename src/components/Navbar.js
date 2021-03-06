import React from 'react';
import styled, { css } from 'styled-components/macro';

import { menuData } from '../data/MenuData';

import { Button } from './Button';

import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 60px;
  background: #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
`;

export const MenuBars = styled.i``;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>ELIXR</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact'>Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
