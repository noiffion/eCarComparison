import { ControllerMethod } from '../controller.d';
import Cars from '../../models/Cars';
import { ICar } from '../../models/models';

const getECars: ControllerMethod = async function (req, res) {
  try {
    const eCarList: ICar[] = await Cars.find({ powertrain: 'electric' }, null, {
      sort: { manufacturer: 1 },
    });
    res.status(200);
    res.send(eCarList);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
};

export default getECars;
