import { ControllerMethod } from '../controller';
import * as AWS from '../../utils/aws';
import Users from '../../models/Users';
import { IUser } from '../../models/models';

const putAWSSignedUrl: ControllerMethod = async function (req, res) {
  try {
    res.status(200);
    res.send();
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default putAWSSignedUrl;
