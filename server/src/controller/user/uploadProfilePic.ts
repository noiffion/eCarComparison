import { ControllerMethod } from '../controller';
import Users from '../../models/Users';
import { IUser } from '../../models/models';

const uploadProfilePic: ControllerMethod = async function (req, res) {
  try {
    const userId = req.body.userId;
    delete req.body.userId;
    const user: IUser = await Users.findByIdAndUpdate(userId, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default uploadProfilePic;
