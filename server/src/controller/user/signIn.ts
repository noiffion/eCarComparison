import { ControllerMethod } from '../interface';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Users from '../../models/Users';
import { IUser } from '../../models/interfaces';
const JWT_KEY = process.env.JWT_KEY || '';

const signIn: ControllerMethod = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user: IUser = await Users.findOne({ email: email });
    const validatedPswd = await bcrypt.compare(password, user.password);
    if (!validatedPswd) throw new Error('Incorrect password!');
    const accessToken = jwt.sign({ _id: user._id }, JWT_KEY);
    res.status(200).send({ accessToken });
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: 'Username or password is incorrect' });
  }
};

export default signIn;
