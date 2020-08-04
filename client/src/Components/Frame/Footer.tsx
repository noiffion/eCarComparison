import React, { ReactElement } from 'react';
import CSS from 'csstype';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Styles {
  footer: CSS.Properties;
  footerList: CSS.Properties;
}
const st: Styles = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f4f4f',
    width: '100%',
    margin: '6vh 0 0.1vh 0',
    padding: '2vh 0 1.6vh 0',
  },
  footerList: {
    width: '60%',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

const SLink = styled(Link)`
  text-decoration: none;
  color: #f0ffff;
  &:hover {
    color: #00ff00;
  }
`;

function Footer(): ReactElement {
  return (
    <nav style={st.footer}>
      <ul style={st.footerList}>
        <SLink to="/about/">
          <li>About</li>
        </SLink>
        <SLink to="/faq/">
          <li>FAQ</li>
        </SLink>
        <SLink to="/contact/">
          <li>Contact</li>
        </SLink>
      </ul>
    </nav>
  );
}

export default Footer;
