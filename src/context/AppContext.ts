import { createContext } from 'react';

export interface AppContextInterface {
  isMenuOpen: boolean;
  toogleOpenMenu: () => void;
}

const AppContext = createContext<AppContextInterface>({
  isMenuOpen: false,
  toogleOpenMenu: () => {},
});

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
