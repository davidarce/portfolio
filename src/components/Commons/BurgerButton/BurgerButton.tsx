import React from 'react';
import styled from 'styled-components';

type myProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

type myBurgerButtonProps = {
    open: boolean;
    onClick: () => void;
};

const StyledBurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  top: 5%;
  left: 0;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #CCCCCC;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: myBurgerButtonProps) =>
        open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }: myBurgerButtonProps) => (open ? '0' : '1')};
      transform: ${({ open }: myBurgerButtonProps) =>
        open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }: myBurgerButtonProps) =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default function BurgerButton({ open, setOpen }: myProps) {
  return (
    <StyledBurgerButton open={open} onClick={() => setOpen(!open)} >
      <div />
      <div />
      <div />
    </StyledBurgerButton>
  );
}
