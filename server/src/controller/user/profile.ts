import { ControllerMethod } from '../interface';
import Users from '../../models/Users';

const profile: ControllerMethod = async function (req, res) {
  try {
    console.log('profile');
  } catch (err) {
    console.error(err);
  }
};

export default profile;
