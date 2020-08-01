import { ControllerMethod } from '../interface';
import Cars from '../../models/Cars';
import { ICar } from '../../models/interfaces';

const getECars: ControllerMethod = async function (req, res) {
  try {
    const eCarList: ICar[] = await Cars.find({ powertrain: 'electric' });
    res.status(200);
    res.send(eCarList);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default getECars;
