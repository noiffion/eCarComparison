import { ControllerMethod } from './controller';
import { getGetSignedUrl } from '../utils/aws';
import Users from '../models/Users';
import { IUser } from '../models/models';

const profile: ControllerMethod = async function (req, res) {
  try {
    const user: IUser = await Users.findById(req.body.userId);
    if (!user) throw new Error('No user found with this id!');
    const respUser = {
      _id: user._id,
      favourites: user.favourites,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      lastLogin: user.lastLogin,
      userIcon: user.userIcon ? getGetSignedUrl(user.userIcon) : '',
    };
    res.status(200);
    res.send(respUser);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default profile;
