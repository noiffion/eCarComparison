import { ControllerMethod } from '../interface';
import Cars from '../../models/Cars';

const getOneCar: ControllerMethod = async function (req, res) {
  try {
    res.status(200);
    res.send('getOneCar');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default getOneCar;
