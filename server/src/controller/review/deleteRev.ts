import { ControllerMethod } from '../interface';
import Reviews from '../../models/Reviews';

const deleteRev: ControllerMethod = async function (req, res) {
  try {
    console.log('deleteRev');
  } catch (err) {
    console.error(err);
  }
};

export default deleteRev;
