import React, { useState, useEffect, ReactElement } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Switch, Redirect, Route } from 'react-router-dom';
import CSS from 'csstype';
import { ICar, IUser } from '../../Interfaces';
import apiReqs from '../../API/apiReqs';
import CarList from '../Car/CarList';
import CarBrochure from '../Car/CarBrochure';
import Comparison from '../Car/Comparison';
import Header from './Header';
import Footer from './Footer';
import Profile from '../User/Profile';
import SignIn from '../User/SignIn';
import SignUp from '../User/SignUp';

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
const uData: IUser = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  lastLogin: new Date(),
};

function Main(): ReactElement {
  const [eCarList, setECarList] = useState<ICar[]>([]);
  const [filteredCars, setFilteredCars] = useState<ICar[]>([]);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>(uData);

  useEffect((): void => {
    apiReqs
      .getECars()
      .then((cars) => {
        setECarList(cars);
        setFilteredCars(cars);
      })
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME, rtl: false }}>
      <header>
        <Header
          eCarList={eCarList}
          setFilteredCars={setFilteredCars}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </header>
      <main style={st.main}>
        <Switch>
          <Route exact path="/mainList/">
            <CarList eCarList={filteredCars} />
          </Route>
          <Route path="/user/profile/">
            <Profile user={user} setUser={setUser} />
          </Route>
          <Route path="/user/signIn/">
            <SignIn setAuthenticated={setAuthenticated} />
          </Route>
          <Route path="/user/signUp/">
            <SignUp setAuthenticated={setAuthenticated} />
          </Route>
          <Route path="/carBrochure/:carId">
            <CarBrochure />
          </Route>
          <Route path="/comparison/:carId">
            <Comparison />
          </Route>
          <Redirect from="/" to="/mainList/" />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default Main;
