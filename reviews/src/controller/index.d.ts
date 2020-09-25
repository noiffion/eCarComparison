import { Request, Response } from 'express';

export interface ControllerMethod {
  (req: Request, res: Response): void;
}

interface Controller {
  readRevs: ControllerMethod;
  createRev: ControllerMethod;
  updateRev: ControllerMethod;
  deleteRev: ControllerMethod;
}

export default Controller;
