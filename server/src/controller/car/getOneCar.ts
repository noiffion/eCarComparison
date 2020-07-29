import { ControllerMethod } from '../interface';
import Car from '../../models/Car';

const getOneCar: ControllerMethod = async function (req, res) {
  try {
    console.log('getOneCar');
  } catch (err) {
    console.error(err);
  }
};

export default getOneCar;
