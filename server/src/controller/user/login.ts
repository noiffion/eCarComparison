import { ControllerMethod } from '../interface';
import Users from '../../models/Users';

const login: ControllerMethod = async function (req, res) {
  try {
    console.log('login');
  } catch (err) {
    console.error(err);
  }
};

export default login;
