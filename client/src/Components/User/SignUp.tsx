import React, { ReactElement, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import { IUser, FormMethod } from '../../Interfaces';
import apiReqs from '../../API/apiReqs';

interface PropTypes {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}
function SignUp({ user, setUser, setAuthenticated }: PropTypes): ReactElement {
  const history = useHistory();

  const handleChange: FormMethod<ChangeEvent<HTMLInputElement>> = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit: FormMethod<FormEvent<HTMLFormElement>> = async (event) => {
    event.preventDefault();
    const { email, password, firstName, lastName } = user;
    const newUser: IUser = {
      email,
      password,
      firstName,
      lastName,
      lastLogin: new Date(),
    };
    const { jwtToken } = await apiReqs.signAuth(true, newUser);
    sessionStorage.setItem('jwtToken', jwtToken);
    setAuthenticated(true);
    history.push('/user/profile/');
  };

  const validateForm = () => {
    return !user.email || !user.password || !user.firstName || !user.lastName;
  };

  return (
    <div>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username@mail.com"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
      </form>
    </div>
  );
}

export default SignUp;
