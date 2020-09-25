import { Request, Response } from 'express';

export interface ControllerMethod {
  (req: Request, res: Response): void;
}

interface Controller {
  getECars: ControllerMethod;
  getOneCar: ControllerMethod;
}

export default Controller;
