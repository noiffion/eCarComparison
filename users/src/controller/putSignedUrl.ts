import { ControllerMethod } from './controller';
import { getPutSignedUrl } from '../utils/aws';

const putSignedUrl: ControllerMethod = async function (req, res) {
  try {
    const signedUrl = getPutSignedUrl(req.params.imgName);
    res.status(201);
    res.send({ url: signedUrl });
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default putSignedUrl;
