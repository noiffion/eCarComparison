import { ControllerMethod } from '../interface';
import Messages from '../../models/Messages';

const readMsgs: ControllerMethod = async function (req, res) {
  try {
    console.log('readMsgs');
  } catch (err) {
    console.error(err);
  }
};

export default readMsgs;
