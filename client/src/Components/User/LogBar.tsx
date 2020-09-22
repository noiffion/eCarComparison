import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';
import CSS from 'csstype';

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  setAlert: Dispatch<SetStateAction<boolean>>;
  setAlertMsg: Dispatch<SetStateAction<string>>;
}
function LogBar({
  authenticated,
  setAuthenticated,
  setAlert,
  setAlertMsg,
}: PropTypes): ReactElement {
  const history = useHistory();

  const logout = (): void => {
    sessionStorage.removeItem('jwtToken');
    setAuthenticated(false);
    history.push('/mainList');
    setAlert(true);
    setAlertMsg(`You've logged out.`);
    setTimeout(() => {
      setAlert(false);
      setAlertMsg('');
    }, 2000);
  };

  const avatarName = (): string => {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const userData = jwtToken ? JSON.parse(atob(jwtToken.split('.')[1])) : { firstName: 'X' };
    return userData.firstName.charAt(0);
  };

  return (
    <ul style={st.linkList}>
      {authenticated ? (
        <>
          <li style={st.link}>
            <SLink to="/user/profile">
              <Avatar
                backgroundColor="#00ff00"
                size="medium"
                style={{ marginRight: '3px', marginBottom: '3px' }}
              >
                <Avatar.Text>{avatarName()}</Avatar.Text>
              </Avatar>
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
