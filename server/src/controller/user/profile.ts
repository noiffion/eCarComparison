import { ControllerMethod } from '../interface';
import Users from '../../models/Users';

const profile: ControllerMethod = async function (req, res) {
  try {
    console.log('profile');
    res.status(200);
    res.send('profile');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default profile;
