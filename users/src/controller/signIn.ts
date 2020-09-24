import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ControllerMethod } from './controller';
import { getGetSignedUrl } from '../utils/aws';
import Users from '../models/Users';
import { IUser } from '../models/models';
import { JWT_KEY } from '../server';

const signIn: ControllerMethod = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user: IUser = await Users.findOne({ email });
    const validatedPswd = await bcrypt.compare(password, user.password);
    if (!validatedPswd) throw new Error('Incorrect password!');
    const respUser = {
      _id: user._id,
      favourites: user.favourites,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      lastLogin: user.lastLogin,
      userIcon: user.userIcon ? getGetSignedUrl(user.userIcon) : '',
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    const jwtToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      JWT_KEY
    );
    res.status(200).send({ user: respUser, token: jwtToken });
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: 'Username or password is incorrect!' });
  }
};

export default signIn;
