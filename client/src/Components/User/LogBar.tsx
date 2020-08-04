import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CSS from 'csstype';
import { Button } from '@zendeskgarden/react-buttons';

interface Styles {
  linkList: CSS.Properties;
  link: CSS.Properties;
}

const st: Styles = {
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginRight: '0.5vw',
  },
  link: {
    width: '100%',
    marginBottom: '2px',
  },
};

const SLink = styled(Link)`
  text-decoration: none;
  color: #00ff00;
  &:hover {
    text-decoration: none;
    color: #00ff00;
  }
`;

const SButton = styled(Button)`
  font-size: 16px;
  border-color: #f0ffff;
  color: #f0ffff;
  width: 100%;
  &:hover {
    border-color: #00ff00;
    color: #00ff00;
  }
`;
interface PropTypes {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}
function LogBar({ authenticated, setAuthenticated }: PropTypes): ReactElement {
  const history = useHistory();

  const logout = (): void => {
    const jwtToken = sessionStorage.getItem('jwtToken') || '';
    sessionStorage.removeItem(jwtToken);
    setAuthenticated(false);
    history.push('/mainList');
  };

  return (
    <ul style={st.linkList}>
      {authenticated ? (
        <>
          <li style={st.link}>
            <SLink to="/user/profile">
              <SButton>Profile</SButton>
            </SLink>
          </li>
          <li style={st.link}>
            <SButton onClick={() => logout()}> Logout </SButton>
          </li>
        </>
      ) : (
        <>
          <li style={st.link}>
            <SLink to="/user/signUp">
              <SButton>Sign up</SButton>
            </SLink>
          </li>
          <li style={st.link}>
            <SLink to="/user/signIn">
              <SButton>Log in</SButton>
            </SLink>
          </li>
        </>
      )}
    </ul>
  );
}

export default LogBar;
