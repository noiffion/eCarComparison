import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import CSS from 'csstype';
import styled from 'styled-components';
import avatarImg from '../../Images/avatar.png';
import apiReqs from '../../API/apiReqs';
import { IUser } from '../index.d';

interface Styles {
  profileContainer: CSS.Properties;
  imageFrame: CSS.Properties;
  userIcon: CSS.Properties;
  persParticulars: CSS.Properties;
  persDetails: CSS.Properties;
  fileUpload: CSS.Properties;
  fillSpace: CSS.Properties;
}

const st: Styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  imageFrame: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40vh',
  },
  userIcon: {
    minWidth: '22vw',
    maxHeight: '40vh',
    borderRadius: '50%',
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
    fontStyle: 'italic',
  },
  fileUpload: {
    position: 'relative',
    overflow: 'hidden',
    margin: '10px',
  },
  fillSpace: {
    marginTop: '70vh',
  },
};

const UploadTitle = styled.span`
  color: #00ff00;
  width: 100%;
`;
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

  const processFile = async (event) => {
    const jwtToken = sessionStorage.getItem('jwtToken') || '';
    if (!jwtToken) history.push('/');

    const imageFile = event.target.files[0];
    const signed = await apiReqs.putAWSSign(jwtToken, imageFile.name);
    apiReqs
      .uploadToS3(signed.url, imageFile)
      .then(async () => {
        const userInfo: IUser = await apiReqs.uploadProfilePic(jwtToken, {
          userIcon: imageFile.name,
        });
        setUser({ ...userInfo });
      })
      .catch(console.error);
  };

  const imageFrame = (
    <div style={st.imageFrame}>
      {user && user.userIcon ? (
        <img style={st.userIcon} src={user.userIcon} alt="profile pic" />
      ) : (
        <img style={st.userIcon} src={avatarImg} alt="profile pic" />
      )}
    </div>
  );

  return (
    <section style={st.profileContainer}>
      <h1>Welcome, {user.firstName}</h1>
      {imageFrame}
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
