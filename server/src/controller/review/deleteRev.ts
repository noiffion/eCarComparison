import { ControllerMethod } from '../interface';
import Reviews from '../../models/Reviews';

const deleteRev: ControllerMethod = async function (req, res) {
  try {
    console.log('deleteRev');
    res.status(200);
    res.send('deleteRev');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default deleteRev;
