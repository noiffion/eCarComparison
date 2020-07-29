import { ControllerMethod } from '../interface';
import Users from '../../models/Users';

const signUp: ControllerMethod = async function (req, res) {
  try {
    console.log('signUp');
  } catch (err) {
    console.error(err);
  }
};

export default signUp;
