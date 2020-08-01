import { ControllerMethod } from '../interface';
import Reviews from '../../models/Reviews';

const readRevs: ControllerMethod = async function (req, res) {
  try {
    res.status(200);
    res.send('readRevs');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default readRevs;
