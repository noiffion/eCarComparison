import React from 'react';
import CSS from 'csstype';
import { Link } from 'react-router-dom';
import { Field, MediaInput } from '@zendeskgarden/react-forms';
import eCarSrc from '../Images/eCar.png';
import magnGlSrc from '../Images/magnGlass.svg';

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
  },
  searchForm: {
    marginRight: '2vw',
    width: '20vw',
  },
  searchBar: {
    fontSize: '24px',
  },
};

function Header(): React.ReactElement {
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
      <form style={st.searchForm}>
        <Field>
          <MediaInput
            style={st.searchBar}
            placeholder="Search for a car"
            start={magnGlass}
            focusInset
          />
        </Field>
      </form>
    </nav>
  );
}

export default Header;
