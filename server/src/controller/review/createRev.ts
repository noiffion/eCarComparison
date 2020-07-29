import { ControllerMethod } from '../interface';
import Reviews from '../../models/Reviews';

const createRev: ControllerMethod = async function (req, res) {
  try {
    console.log('createRev');
  } catch (err) {
    console.error(err);
  }
};

export default createRev;
