import { ControllerMethod } from '../interface';
import Cars from '../../models/Cars';
import { ICar } from '../../models/interfaces';

const getOneCar: ControllerMethod = async function (req, res) {
  try {
    const car: ICar = await Cars.findById(req.params.carId);
    res.status(200);
    res.send(car);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default getOneCar;
