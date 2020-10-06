import { ControllerMethod } from './index.d';
import Reviews from '../model/Reviews';
import { IReview } from '../model';

const createRev: ControllerMethod = async function (req, res) {
  try {
    await Reviews.create({ ...req.body });
    const reviews: IReview[] = await Reviews.find({ carId: `${req.body.carId}` }, null, {
      sort: { updatedAt: -1 },
    });
    res.status(201);
    res.send(reviews);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default createRev;
