import React, { useState, useEffect } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Switch, Redirect, Route } from 'react-router-dom';
import CSS from 'csstype';
import CarList from './CarList';
import CarDetails from './CarDetails';
import apiReqs from '../API/apiReqs';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { CtxProvider } from '../Context';
import { ICar } from '../Interfaces';

interface Styles {
  main: CSS.Properties;
}
const st: Styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '120px 0 0 0',
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
          <Header />
        </header>
        <main style={st.main}>
          <Switch>
            <Route exact path="/mainList/">
              <CarList />
            </Route>
            <Route path="/carDetails/:carId">
              <CarDetails />
            </Route>
            <Redirect from="/" to="/mainList/" />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </CtxProvider>
    </ThemeProvider>
  );
}

export default Main;
