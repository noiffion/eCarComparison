import React, {
  useState,
  ReactElement,
  ChangeEvent,
  FormEvent,
  SetStateAction,
  Dispatch,
} from 'react';
import CSS from 'csstype';
import { Link, useHistory } from 'react-router-dom';
import { Field, MediaInput } from '@zendeskgarden/react-forms';
import eCarSrc from '../Images/eCar.png';
import magnGlSrc from '../Images/magnGlass.svg';
import { ICar } from '../Interfaces';

interface Styles {
  navBar: CSS.Properties;
  navList: CSS.Properties;
  backToHomeLink: CSS.Properties;
  pageTitle: CSS.Properties;
  searchForm: CSS.Properties;
  searchBar: CSS.Properties;
}
const st: Styles = {
  navBar: {
    backgroundColor: '#2f4f4f',
    color: '#00ff00',
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    margin: '0.3%',
    padding: 0,
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backToHomeLink: {
    textDecoration: 'none',
  },
  pageTitle: {
    margin: '0 0 0 1vw',
    padding: 0,
    fontSize: '24px',
  },
  searchForm: {
    marginRight: '2vw',
    width: '20vw',
  },
  searchBar: {
    fontSize: '18px',
  },
};

interface PropTypes {
  eCarList: ICar[];
  setFilteredCars: Dispatch<SetStateAction<ICar[]>>;
}
function Header({ eCarList, setFilteredCars }: PropTypes): ReactElement {
  const [searchedCar, setSearchedCar] = useState<string>('');
  const history = useHistory();

  interface CarSearchForm<E> {
    (event: E): void;
  }
  const carSearchChange: CarSearchForm<ChangeEvent<HTMLInputElement>> = (event) => {
    if (!history.location.pathname.includes('mainList')) history.push('/mainList/');
    let inputStr = event.target.value;
    inputStr = inputStr.replace(/^[\s\uFEFF\xA0]/g, '');
    inputStr = inputStr.replace(/[\s\uFEFF\xA0]+$/g, ' ');
    setSearchedCar(inputStr);
    const searchString = inputStr.toLowerCase();
    const filtCars = eCarList.filter((car) => {
      const brandName = car.manufacturer.toLowerCase();
      const carName = car.name.toLowerCase();
      const carFullName = `${brandName} ${carName}`;
      return carFullName.includes(searchString);
    });
    setFilteredCars(filtCars);
  };

  // TODO: delete this
  const carSearchSubmit: CarSearchForm<FormEvent<HTMLFormElement>> = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const magnGlass = <img src={magnGlSrc} height="30" width="30" alt="magnifying glass icon" />;
  return (
    <nav style={st.navBar}>
      <ul style={st.navList}>
        <li>
          <Link style={st.backToHomeLink} to="/">
            <img src={eCarSrc} height="80" width="200" title="Home" alt="Back home button" />
          </Link>
        </li>
        <li>
          <h1 style={st.pageTitle}>eCar comparison</h1>
        </li>
      </ul>
      <form style={st.searchForm} onSubmit={(event) => carSearchSubmit(event)}>
        <Field>
          <MediaInput
            style={st.searchBar}
            value={searchedCar}
            placeholder="Search for a car"
            start={magnGlass}
            onChange={(event) => carSearchChange(event)}
            focusInset
          />
        </Field>
      </form>
    </nav>
  );
}

export default Header;
