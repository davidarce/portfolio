import React from 'react';
import styled from 'styled-components';
import { Menu } from '../Menu';

const StyledHeader = styled.header`
  grid-area: hd;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #040404;
  height: 70px;
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

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Menu/>
      </Container>
      <TranslationButton>EN</TranslationButton>
    </StyledHeader>
  );
}
