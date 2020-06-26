import React from 'react';
import styled from 'styled-components';
import { Header } from './Commons/Header';
import { Footer } from './Commons/Footer';
import { Home } from './Home';

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
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    margin: 0 12px;
  }

`;

function App() {
  return (
    <StyledApp>
      <Header></Header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home />
      <Footer />
    </StyledApp>
  );
}

export default App;
