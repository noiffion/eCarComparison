import { ControllerMethod } from '../interface';

const createMsg: ControllerMethod = async function (req, res) {
  try {
    console.log('createMsg');
  } catch (err) {
    console.error(err);
  }
};

export default createMsg;
