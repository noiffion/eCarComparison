import { ControllerMethod } from '../interface';
import Cars from '../../models/Cars';

const getCars: ControllerMethod = async function (req, res) {
  try {
    console.log('getCars');
    res.status(200);
    res.send('getCars');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default getCars;
