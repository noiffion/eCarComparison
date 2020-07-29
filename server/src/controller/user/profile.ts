import { ControllerMethod } from '../interface';
import User from '../../models/User';

const profile: ControllerMethod = async function (req, res) {
  try {
    console.log('profile');
  } catch (err) {
    console.error(err);
  }
};

export default profile;
