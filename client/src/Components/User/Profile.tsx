import React, { useEffect, ReactElement, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import CSS from 'csstype';
import apiReqs from '../../API/apiReqs';
import { IUser } from '../index.d';

interface Styles {
  profileContainer: CSS.Properties;
  fillSpace: CSS.Properties;
  persParticulars: CSS.Properties;
  persDetails: CSS.Properties;
}

const st: Styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  persParticulars: {
    width: '100%',
    marginTop: '5vh',
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: '160px 250px',
    gridGap: '10px 10px',
    justifyItems: 'left',
    alignItems: 'center',
  },
  persDetails: {
    color: '#2f4f4f',
    fontStyle: 'italic'
  },
  fillSpace: {
    marginTop: '70vh',
  },
}

interface PropTypes {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}
function Profile({ user, setUser }: PropTypes): ReactElement {
  const history = useHistory();

  useEffect(() => {
    const jwtToken = sessionStorage.getItem('jwtToken') || '';
    const getProfile = async () => {
      try {
        const userInfo: IUser = await apiReqs.profile(jwtToken);
        if (Object.keys(user).length < 2) setUser({ ...userInfo });
      } catch (err) {
        console.error(err);
        history.push('/');
      }
    };
    getProfile();
  }, [setUser, history]);

  return (
    <section style={st.profileContainer}>
      <h1>
        Welcome, {user.firstName}
      </h1>
      <img alt="profile pic" />
      <ul style={st.persParticulars}>
        <li>Email:</li>
        <li style={st.persDetails}>{user.email}</li>

        <li>First name:</li>
        <li style={st.persDetails}>{user.firstName}</li>

        <li>Last name:</li>
        <li style={st.persDetails}>{user.lastName}</li>

        <li>Favourite cars:</li>
        <li style={st.persDetails}>{user.favourites}</li>
      </ul>
      <div style={st.fillSpace}></div>
    </section>
  );
}

export default Profile;
