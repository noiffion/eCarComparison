import React from 'react';
import CarList from './CarList';

export const MainContext = React.createContext('');

function Main(): React.ReactElement {
  const contextValue = 'Hello, Bello!';
  return (
    <MainContext.Provider value={contextValue}>
      <main>
        <h1>Main</h1>
        <CarList />
      </main>
    </MainContext.Provider>
  );
}

export default Main;
