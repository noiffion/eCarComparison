import { Request, Response } from 'express';

export interface ControllerMethod {
  (req: Request, res: Response): void;
}

interface Controller {
  getCars: ControllerMethod;
  getOneCar: ControllerMethod;
  signUp: ControllerMethod;
  login: ControllerMethod;
  profile: ControllerMethod;
  readMsgs: ControllerMethod;
  createMsg: ControllerMethod;
  updateMsg: ControllerMethod;
  deleteMsg: ControllerMethod;
}

export default Controller;
