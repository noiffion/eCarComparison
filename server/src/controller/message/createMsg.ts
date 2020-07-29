import { ControllerMethod } from '../interface';
import Messages from '../../models/Messages';

const createMsg: ControllerMethod = async function (req, res) {
  try {
    console.log('createMsg');
  } catch (err) {
    console.error(err);
  }
};

export default createMsg;
