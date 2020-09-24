import React, {
  useState,
  ReactElement,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from '@zendeskgarden/react-notifications';
import { Field, Label, Input, Message } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';
import CSS from 'csstype';
import apiReqs from '../../API/apiReqs';
import { IUser, FormMethod } from '../index.d';

interface Styles {
  formContainer: CSS.Properties;
  loginTitle: CSS.Properties;
  field: CSS.Properties;
  input: CSS.Properties;
  submit: CSS.Properties;
  alert: CSS.Properties;
}
const st: Styles = {
  alert: {
    position: 'absolute',
    top: '1.5vh',
    zIndex: 1000,
    fontSize: '18px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '75.5vh',
  },
  loginTitle: {
    fontSize: '42px',
    marginTop: '3vh',
    marginBottom: '4vh',
  },
  field: {
    marginTop: '2vh',
    minWidth: '30vw',
    fontSize: '24px',
  },
  input: {
    fontSize: '24px',
  },
  submit: {
    height: '6vh',
    fontSize: '24px',
  },
};

const SButton = styled(Button)`
  font-size: 36px;
  border-color: #2f4f4f;
  color: #2f4f4f;
  width: 100%;
  &:hover {
    background-color: #f0ffff;
    border-color: #00ff00;
    color: #00ff00;
  }
`;

interface PropTypes {
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser>>;
}
function SignUp({ setAuthenticated, setUser }: PropTypes): ReactElement {
  const [email, setMail] = useState<string>('');
  const [password, setPswd] = useState<string>('');
  const [firstName, setFName] = useState<string>('');
  const [lastName, setLName] = useState<string>('');
  const [isAlert, setAlert] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string>('');

  const history = useHistory();

  const handleChange: FormMethod<ChangeEvent<HTMLInputElement>> = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setMail(value);
    else if (name === 'password') setPswd(value);
    else if (name === 'firstName') setFName(value);
    else if (name === 'lastName') setLName(value);
  };

  const handleSubmit: FormMethod<FormEvent<HTMLFormElement>> = async (event) => {
    event.preventDefault();
    const newUser: IUser = {
      email,
      password,
      firstName,
      lastName,
      lastLogin: new Date(),
    };
    try {
      const { token, user } = await apiReqs.signAuth(true, newUser);
      sessionStorage.setItem('jwtToken', token);
      setUser(user);
      setAuthenticated(true);
      history.push('/');
    } catch (err) {
      console.error(err);
      setAlert(true);
      setAlertMsg('Your form data is incorrect!');
      setTimeout(() => {
        setAlert(false);
        setAlertMsg('');
      }, 2000);
    }
  };

  const validateForm = () => {
    return !email || !password || !firstName || !lastName;
  };

  return (
    <>
      {isAlert ? (
        <Alert style={st.alert} type="error">
          {alertMsg}
        </Alert>
      ) : null}
      <section style={st.formContainer}>
        <h2 style={st.loginTitle}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <Field style={st.field}>
            <Label>E-mail</Label>
            <Input
              type="text"
              placeholder="username@mail.com"
              name="email"
              value={email}
              onChange={handleChange}
              validation={undefined}
              style={st.input}
            />
            <Message validation={undefined}> </Message>
          </Field>
          <Field style={st.field}>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChange}
              validation={undefined}
              style={st.input}
            />
            <Message validation={undefined}> </Message>
          </Field>
          <Field style={st.field}>
            <Label>First name</Label>
            <Input
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              validation={undefined}
              style={st.input}
            />
            <Message validation={undefined}> </Message>
          </Field>
          <Field style={st.field}>
            <Label>Last name</Label>
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              validation={undefined}
              style={st.input}
            />
            <Message validation={undefined}> </Message>
          </Field>
          <Field style={st.field}>
            <SButton type="submit" disabled={validateForm()} style={st.submit}>
              Sign up
            </SButton>
          </Field>
        </form>
      </section>
    </>
  );
}

export default SignUp;
