import { ControllerMethod } from '../controller';
import Reviews from '../../models/Reviews';

const updateRev: ControllerMethod = async function (req, res) {
  try {
    res.status(200);
    res.send('updateRev');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default updateRev;
