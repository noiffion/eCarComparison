import { ControllerMethod } from '../interface';
import Reviews from '../../models/Reviews';

const createRev: ControllerMethod = async function (req, res) {
  try {
    console.log(req.body);
    res.status(200);
    res.send('createRev');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default createRev;
