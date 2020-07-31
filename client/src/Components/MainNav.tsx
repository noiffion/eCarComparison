import React from 'react';
import CSS from 'csstype';
import { Link } from 'react-router-dom';
import garageImg from '../Images/garage.svg';

interface Styles {
  navBar: CSS.Properties;
  navList: CSS.Properties;
  backToHomeLink: CSS.Properties;
}
const st: Styles = {
  navBar: {
    backgroundColor: '#9ACD32', // YellowGreen
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
  },
  navList: {
    listStyleType: 'none',
  },
  backToHomeLink: {
    textDecoration: 'none',
    color: '#000000',
  },
};

interface PropTypes {}

function MainNav(): React.ReactElement {
  return (
    <nav style={st.navBar}>
      <ul style={st.navList}>
        <li>
          <Link style={st.backToHomeLink} to={'/'}>
            <img src={garageImg} height="50" width="50" alt="Back home button" />
          </Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default MainNav;
