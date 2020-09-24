import React, { useEffect, ReactElement, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import CSS from 'csstype';
import styled from 'styled-components';
import apiReqs from '../../API/apiReqs';
import { IUser } from '../index.d';

interface Styles {
  profileContainer: CSS.Properties;
  fillSpace: CSS.Properties;
  persParticulars: CSS.Properties;
  persDetails: CSS.Properties;
  fileUpload: CSS.Properties;
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
  fileUpload: {
    position: 'relative',
    overflow: 'hidden',
    margin: '10px',
  },
  fillSpace: {
    marginTop: '70vh',
  },
}

const UploadTitle = styled.span`
  color: #00ff00;
  width: 100%;
`
const UploadButton = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  opacity: 0,
  filter: alpha(opacity=0);
  outline: none;
  color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

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
  }, [user, setUser, history]);

  const processFile = async (event) => {
    const jwtToken = sessionStorage.getItem('jwtToken') || '';
    const imageFile = event.target.files[0];
    const signedUrl = await apiReqs.putAWSSign(jwtToken, imageFile.name);
    console.log(imageFile, signedUrl);

    /*
    const headers = new HttpHeaders({ 'Content-Type': file.type });
    const req = new HttpRequest('PUT', signedUrl, file, {
      headers: headers,
      reportProgress: true, // track progress
    });
    */

  };

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

        <li>New profile pic:</li>
        <li style={st.fileUpload}>
          <UploadTitle>Upload</UploadTitle>
          <UploadButton type="file" onChange={processFile} />
        </li>
      </ul>

      <div style={st.fillSpace}></div>
    </section>
  );
}

export default Profile;
