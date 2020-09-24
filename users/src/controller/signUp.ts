import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ControllerMethod } from './controller';
import Users from '../models/Users';
import { JWT_KEY } from '../server';

const signUp: ControllerMethod = async function (req, res) {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  if (user !== null) return res.status(409).send({ error: 'User already exists!' });

  const pswdHash = await bcrypt.hash(password, 10);
  const newUser = new Users({
    ...req.body,
    password: pswdHash,
  });
  try {
    const { _id, email } = await newUser.save();
    const jwtToken = jwt.sign({ _id, email }, JWT_KEY);
    const retNewUser = await Users.findOne({ _id }).select({ password: 0 });
    res.status(201).send({ user: retNewUser, token: jwtToken });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Could not create user!' });
  }
};

export default signUp;
