import { ControllerMethod } from '../interface';

const updateMsg: ControllerMethod = async function (req, res) {
  try {
    console.log('updateMsg');
  } catch (err) {
    console.error(err);
  }
};

export default updateMsg;
