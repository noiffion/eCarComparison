import { ControllerMethod } from '../interface';
import Cars from '../../models/Cars';

const getOneCar: ControllerMethod = async function (req, res) {
  try {
    console.log('getOneCar');
  } catch (err) {
    console.error(err);
  }
};

export default getOneCar;
