import { ControllerMethod } from '../interface';

const readMsgs: ControllerMethod = async function (req, res) {
  try {
    console.log('readMsgs');
  } catch (err) {
    console.error(err);
  }
};

export default readMsgs;
