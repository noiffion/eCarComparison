import React from 'react';
import CSS from 'csstype';
import MainNav from '../Components/MainNav';
import MainFoot from '../Components/MainFoot';
import CarList from './CarList';
import { MainCtxP, IMainCtx } from '../Context/MainCtx';

/*
const font = 'Comfortaa';
interface Styles {
  header: CSS.Properties;
  main: CSS.Properties;
  footer: CSS.Properties;
}
const st: Styles = {
  header: {
    fontFamily: `${font}`,
  },
  main: {
    fontFamily: `${font}`,
  },
  footer: {
    fontFamily: `${font}`,
  },
};
*/

function Main(): React.ReactElement {
  return (
    <MainCtxP value="">
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
