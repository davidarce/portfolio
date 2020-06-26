import React, { useState } from 'react';
import styled from 'styled-components';
import { BurgerButton } from '../BurgerButton';
import { Menu } from '../Menu';

const StyledHeader = styled.header`
  grid-area: hd;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TranslationButton = styled.button`
  font-size: 17px;
  color: #cccccc;
  background: transparent;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.1rem;

`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #040404;
  height: 70px;
  width: 100%;

  @media (max-width: 480px) {
    height: 50px;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <BurgerButton open={isOpen} setOpen={setIsOpen} />
        <Menu open={isOpen} />
      </Container>
      <TranslationButton>EN</TranslationButton>
    </StyledHeader>
  );
}
