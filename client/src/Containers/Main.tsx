import React, { useState, useEffect } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import CSS from 'csstype';
import apiReqs from '../API/apiReqs';
import MainNav from '../Components/MainNav';
import MainFoot from '../Components/MainFoot';
import CarList from './CarList';
import { CtxProvider } from '../Context';
import { ICar } from '../Interfaces';

interface Styles {
  main: CSS.Properties;
}
const st: Styles = {
  main: {
    margin: '100px 0 0 0',
    padding: 0,
  },
};

function Main(): React.ReactElement {
  const [eCarList, setECarList] = useState<ICar[]>([]);

  useEffect((): void => {
    apiReqs
      .getECars()
      .then((cars) => setECarList(cars))
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: false }}>
      <CtxProvider value={{ eCarList }}>
        <header>
          <MainNav />
        </header>
        <main style={st.main}>
          <h1>Main Car</h1>
          <CarList />
        </main>
        <footer>
          <MainFoot />
        </footer>
      </CtxProvider>
    </ThemeProvider>
  );
}

export default Main;
