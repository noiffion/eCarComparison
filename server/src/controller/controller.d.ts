import { Request, Response } from 'express';

export interface ControllerMethod {
  (req: Request, res: Response): void;
}

interface Controller {
  getECars: ControllerMethod;
  getOneCar: ControllerMethod;
  signUp: ControllerMethod;
  signIn: ControllerMethod;
  profile: ControllerMethod;
  putSignedUrl: ControllerMethod;
  uploadProfilePic: ControllerMethod;
  readRevs: ControllerMethod;
  createRev: ControllerMethod;
  updateRev: ControllerMethod;
  deleteRev: ControllerMethod;
}

export default Controller;
