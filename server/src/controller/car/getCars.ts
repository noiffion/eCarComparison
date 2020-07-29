import { ControllerMethod } from '../interface';
import Cars from '../../models/Cars';

const getCars: ControllerMethod = async function (req, res) {
  try {
    console.log('getCars');

  } catch (err) {
    console.error(err);
  }
};

export default getCars;
