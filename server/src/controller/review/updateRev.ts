import { ControllerMethod } from '../controller';
import Reviews from '../../models/Reviews';

const updateRev: ControllerMethod = async function (req, res) {
  try {
    const updatedReview = await Reviews.findByIdAndUpdate(req.params.reviewId, req.body);
    res.status(200);
    res.send(updatedReview);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default updateRev;
