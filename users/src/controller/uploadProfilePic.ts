import { ControllerMethod } from './index.d';
import Users from '../model/Users';
import { getGetSignedUrl } from '../utils/aws';
import { IUser } from '../model';

const uploadProfilePic: ControllerMethod = async function (req, res) {
  try {
    const userId = req.body.userId;
    delete req.body.userId;
    const upUser: IUser = await Users.findByIdAndUpdate(userId, req.body, {
      new: true,
      useFindAndModify: false,
    });
    const respUser = {
      _id: upUser._id,
      favourites: upUser.favourites,
      email: upUser.email,
      firstName: upUser.firstName,
      lastName: upUser.lastName,
      lastLogin: upUser.lastLogin,
      userIcon: upUser.userIcon ? getGetSignedUrl(upUser.userIcon) : '',
      createdAt: upUser.createdAt,
      updatedAt: upUser.updatedAt,
    };
    res.status(200);
    res.send(respUser);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default uploadProfilePic;
