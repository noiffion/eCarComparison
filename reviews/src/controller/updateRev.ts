import { ControllerMethod } from './index.d';
import Reviews from '../model/Reviews';

const updateRev: ControllerMethod = async function (req, res) {
  try {
    delete req.body.userId;
    const updatedReview = await Reviews.findByIdAndUpdate(req.params.reviewId, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200);
    res.send(updatedReview);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default updateRev;
