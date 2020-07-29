import { ControllerMethod } from '../interface';
import Car from '../../models/Car';

const getCars: ControllerMethod = async function (req, res) {
  try {
    console.log('getCars');
  } catch (err) {
    console.error(err);
  }
};

export default getCars;
