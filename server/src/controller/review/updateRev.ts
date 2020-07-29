import { ControllerMethod } from '../interface';
import Reviews from '../../models/Reviews';

const updateRev: ControllerMethod = async function (req, res) {
  try {
    console.log('updateRev');
  } catch (err) {
    console.error(err);
  }
};

export default updateRev;
