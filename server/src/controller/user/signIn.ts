import { ControllerMethod } from '../controller';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Users from '../../models/Users';
import { IUser } from '../../models/models';
import { JWT_KEY } from '../../server';

const signIn: ControllerMethod = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user: IUser = await Users.findOne({ email: email });
    const validatedPswd = await bcrypt.compare(password, user.password);
    if (!validatedPswd) throw new Error('Incorrect password!');
    const jwtToken = jwt.sign({
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
    }, JWT_KEY);
    res.status(200).send({ jwtToken });
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: 'Username or password is incorrect!' });
  }
};

export default signIn;
