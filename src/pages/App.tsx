import React, { useState } from 'react';
import { AppContextProvider } from '../context/AppContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Commons/Header';
import { Footer } from './Commons/Footer';
import { AppRouter } from '../router/AppRouter';
import styled from 'styled-components';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <AppContextProvider value={{ isMenuOpen, toogleOpenMenu}} >
      <StyledApp>
        <Router basename="/portfolio">
          <Header />
          <AppRouter />
          <Footer />
        </Router>
      </StyledApp>
    </AppContextProvider>
  );
}

export default App;
