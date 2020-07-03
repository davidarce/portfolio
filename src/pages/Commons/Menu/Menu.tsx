import React from 'react';
import { AppContextConsumer } from '../../../context/AppContext';
import { Link } from 'react-router-dom';
import { BurgerButton } from '../BurgerButton';

import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #040404;
  min-height: 100vh;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }: myStyledMenuProps) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.4s ease-in-out;

  a {
    margin: 10px 0;
    font-size: 34px;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

type myStyledMenuProps = {
  open: boolean;
};

export default function Menu() {
  return (
    <AppContextConsumer>
      {({ isMenuOpen, toogleOpenMenu }) => (
        <>
          <BurgerButton open={isMenuOpen} setOpen={toogleOpenMenu} />
          <StyledMenu open={isMenuOpen}>
            <Link to="/home" onClick={() => toogleOpenMenu()}>
              Home
            </Link>
            <Link to="/about" onClick={() => toogleOpenMenu()}>
              About Me
            </Link>
            <Link to="/skills" onClick={() => toogleOpenMenu()}>
              Skills
            </Link>
            <Link to="/experience" onClick={() => toogleOpenMenu()}>
              Experience
            </Link>
          </StyledMenu>
        </>
      )}
    </AppContextConsumer>
  );
}
