import { Request, Response } from 'express';


interface ContrMethod {
  (req: Request, res: Response): void;
};


interface Controller {
  getCars: ContrMethod;
  getOneCar: ContrMethod;
  postCar: ContrMethod;
  putCar: ContrMethod;
  deleteCar: ContrMethod;
  login: ContrMethod;
  logout: ContrMethod;
  profile: ContrMethod;
}

export default IController;
