import React from 'react';
import MainNav from '../Components/MainNav';
import MainFoot from '../Components/MainFoot';
import CarList from './CarList';
import { MainCtxP, IMainCtx } from '../Context/MainCtx';

function Main(): React.ReactElement {
  const contextValue = 'Context Message!';
  return (
    <MainCtxP value={contextValue}>
      <header>
        <MainNav />
      </header>
      <main>
        <h1>Main Car</h1>
        <CarList />
      </main>
      <footer>
        <MainFoot />
      </footer>
    </MainCtxP>
  );
}

export default Main;
