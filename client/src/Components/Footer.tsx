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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fffff0;
  &:hover {
    color: #dcdcdc;
  }
`;

function Footer(): ReactElement {
  return (
    <nav style={st.footer}>
      <ul style={st.footerList}>
        <StyledLink to="/about/">
          <li>About</li>
        </StyledLink>
        <StyledLink to="/faq/">
          <li>FAQ</li>
        </StyledLink>
        <StyledLink to="/contact/">
          <li>Contact</li>
        </StyledLink>
      </ul>
    </nav>
  );
}

export default Footer;
