import { ControllerMethod } from '../interface';
import Reviews from '../../models/Reviews';

const readRevs: ControllerMethod = async function (req, res) {
  try {
    console.log('readRevs');
  } catch (err) {
    console.error(err);
  }
};

export default readRevs;
