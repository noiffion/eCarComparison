import { ControllerMethod } from '../interface';
import User from '../../models/User';

const login: ControllerMethod = async function (req, res) {
  try {
    console.log('login');
  } catch (err) {
    console.error(err);
  }
};

export default login;
