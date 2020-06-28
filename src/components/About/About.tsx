import React from 'react';
import AboutLogo from '../../images/aboutLogo.png';
import styled from 'styled-components';

const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-area: main;
  padding: 0 60px;
  background: #040404;

  img {
    width: 50vmin;
    height: 100%;
    z-index: 9;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 0;

    img {
      width: 100%;
      height: 50vmin;
      object-fit: cover;
      object-position: 40% 20%;
      top: 10%;
      left: 0;
      right: 0;
    }
  }

  @media (max-width: 736px) {
    img {
      height: 60vmin;
      top: 20%;
    }
  }

  @media (max-width: 600px) {
    img {
      top: 10%;
    }
  }

  @media (max-width: 480px) {
    img {
      top: 10%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 80px;
  width: 50%;

  h2 {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 34px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 420px 0 0 0;
  }

  @media (max-width: 736px) {
    margin: 260px 0 0 0;
  }

  @media (max-width: 600px) {
    margin: 400px 0 0 0;
  }

  @media (max-width: 480px) {
    margin: 240px 0 0 0;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  color: #808080;

  @media (max-width: 768px) {
    color: #CCCCCC;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

function About() {
  return (
    <StyledAbout>
      <Container>
        <h2>{'David Arce'}</h2>
        <Paragraph>
          Experienced Software Engineer with over 8 years of work in development
          software applications. I have held positions in a number of very
          important companies specialising in IT services.
          <br />
          <br />
          My experience includes systems administration, support, e-commerce
          platforms, testing and continuous integration. Curious, proactive,
          goal-oriented and very good at working and collaborating with teams.
          Has a master’s Degree in Computer and systems engineering.
        </Paragraph>
      </Container>
      <img src={AboutLogo} alt="about logo" />
    </StyledAbout>
  );
}

export default About;
