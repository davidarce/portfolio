import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Commons/Header';
import { Footer } from './Commons/Footer';
import { AppRouter } from '../router/AppRouter';

const StyledApp = styled.div`
  display: grid;
  grid-template-areas:
    'hd hd hd hd hd hd'
    '. main main main main .'
    'ft ft ft ft ft ft';
  grid-template-columns: auto repeat(4, 1fr) auto;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  margin: 0 30px;
  width: auto;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 0 15px;
  }

  @media (max-width: 480px) {
    margin: 0 12px;
  }
`;

function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
