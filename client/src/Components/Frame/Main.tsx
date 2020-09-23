import React, { useState, useEffect, ReactElement } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Switch, Redirect, Route } from 'react-router-dom';
import CSS from 'csstype';
import apiReqs from '../../API/apiReqs';
import CarList from '../Car/CarList';
import CarBrochure from '../Car/CarBrochure';
import Comparison from '../Car/Comparison';
import Header from './Header';
import Footer from './Footer';
import Profile from '../User/Profile';
import SignIn from '../User/SignIn';
import SignUp from '../User/SignUp';
import { ICar, IUser } from '../index.d';

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

function Main(): ReactElement {
  const [eCarList, setECarList] = useState<ICar[]>([]);
  const [filteredCars, setFilteredCars] = useState<ICar[]>([]);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({ email: '' });

  useEffect((): void => {
    apiReqs
      .getECars()
      .then(async (cars) => {
        setECarList(cars);
        setFilteredCars(cars);
        const jwtToken = sessionStorage.getItem('jwtToken');
        try {
          if (jwtToken) {
            const userInfo: IUser = await apiReqs.profile(jwtToken);
            setAuthenticated(true);
            setUser({ ...userInfo });
            console.log(userInfo);
          }
        } catch (err) {
          console.error(err);
        }
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
