import { ControllerMethod } from './index.d';
import Reviews from '../model/Reviews';
import { IReview } from '../model';

const deleteRev: ControllerMethod = async function (req, res) {
  try {
    const removed = await Reviews.findByIdAndDelete(req.params.reviewId);
    const reviews: IReview[] = await Reviews.find({ carId: removed.carId }, null, {
      sort: { updatedAt: -1 },
    });
    res.status(200);
    res.send(reviews);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default deleteRev;
