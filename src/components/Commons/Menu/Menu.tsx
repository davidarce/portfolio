import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #040404;
  min-height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }: myProps) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.4s ease-in-out;

  a {
    margin: 10px 0;
    font-size: 34px;
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

type myProps = {
  open: boolean;
};

export default function Menu({ open }: myProps) {
  return (
    <StyledMenu open={open}>
      <a href="/home">Home</a>
      <a href="/about">About Me</a>
      <a href="/skilss">Skills</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </StyledMenu>
  );
}
