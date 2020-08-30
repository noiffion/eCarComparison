import React, { useEffect, ReactElement, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import apiReqs from '../../API/apiReqs';
import { IUser } from '../index.d';

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
        const { firstName, lastName } = userInfo;
        setUser((prevState) => ({ ...prevState, firstName, lastName }));
      } catch (err) {
        console.error(err);
        history.push('/');
      }
    };
    getProfile();
  }, [setUser, history]);

  return (
    <div>
      <h1>
        Welcome, {user.firstName} {user.lastName}!
      </h1>
      <h3> userdata </h3>
    </div>
  );
}

export default Profile;
