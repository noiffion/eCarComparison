import React, { ReactElement, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import apiReqs from '../../API/apiReqs';
import { IUser, FormMethod } from '../../Interfaces';

interface PropTypes {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}
function SignIn({ user, setUser, setAuthenticated }: PropTypes): ReactElement {
  const history = useHistory();

  const handleChange: FormMethod<ChangeEvent<HTMLInputElement>> = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: FormMethod<FormEvent<HTMLFormElement>> = async (event) => {
    event.preventDefault();
    const loginUser: IUser = {
      email: user.email,
      password: user.password,
      lastLogin: new Date(),
    };
    const { jwtToken } = await apiReqs.signAuth(false, loginUser);
    sessionStorage.setItem('jwtToken', jwtToken);
    setAuthenticated(true);
    history.push('/user/profile/');
  };

  const validateForm = () => {
    return !user.email || !user.password;
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button className="form-submit" type="submit" disabled={validateForm()}>
          &nbsp;Login&nbsp;
        </button>
      </form>
    </div>
  );
}

export default SignIn;
