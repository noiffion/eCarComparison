import { ControllerMethod } from '../interface';
import Messages from '../../models/Messages';

const deleteMsg: ControllerMethod = async function (req, res) {
  try {
    console.log('deleteMsg');
  } catch (err) {
    console.error(err);
  }
};

export default deleteMsg;
