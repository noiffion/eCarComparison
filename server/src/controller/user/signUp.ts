import { ControllerMethod } from '../interface';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Users from '../../models/Users';
const JWT_KEY = process.env.JWT_KEY || '';

const signUp: ControllerMethod = async function (req, res) {
  const { email, password } = req.body;
  const user = await Users.findOne({ email: email });
  if (user !== undefined) {
    return res.status(409).send({ error: 'User already exists' });
  }
  const pswdHash = bcrypt.hash(password, 10);
  const newUser = new Users({
    ...req.body,
    password: pswdHash,
  });
  try {
    const { _id } = await newUser.save();
    const accessToken = jwt.sign({ _id }, JWT_KEY);
    res.status(201).send({ accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Could not create user!' });
  }
};

export default signUp;
