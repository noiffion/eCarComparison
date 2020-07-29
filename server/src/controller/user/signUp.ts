import { ControllerMethod } from '../interface';
import User from '../../models/User';

const signUp: ControllerMethod = async function (req, res) {
  try {
    console.log('signUp');
  } catch (err) {
    console.error(err);
  }
};

export default signUp;
