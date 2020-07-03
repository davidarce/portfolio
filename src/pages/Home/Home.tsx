import React from 'react';
import HomeLogo from '../../images/homeLogo.png';
import styled from 'styled-components';

const StyledHome = styled.div`
  grid-area: main;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  background: #040404;

  img {
    width: 45vmin;
    height: auto;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0 10px;

    img {
      display: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;

  h5 {
    text-transform: uppercase;
    font-size: 17px;
    margin-bottom: 20px;
    font-weight: 400;
    color: #808080;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 34px;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const ContactLink = styled.a`
  font-family: inherit;
  font-size: 17px;
  background: #040404;
  color: #ffffff;
  text-transform: uppercase;
  outline: none;
  border: 1px solid #ffffff;
  padding: 10px;
  width: 145px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

function Home() {
  return (
    <StyledHome>
      <Container>
        <h5>{'<Hello world>'}</h5>
        <Paragraph>
          My name is David Arce. <br />
          I'm Backend Developer from Colombia.
        </Paragraph>
        <ContactLink
          href="mailto:davidarce2915@gmail.com?Subject=Hi%20David"
          target="_top"
        >
          Contact Me
        </ContactLink>
      </Container>
      <img src={HomeLogo} alt="home logo" />
    </StyledHome>
  );
}

export default Home;
