import { Request, Response } from 'express';

export interface ControllerMethod {
  (req: Request, res: Response): void;
}

interface Controller {
  signUp: ControllerMethod;
  signIn: ControllerMethod;
  profile: ControllerMethod;
  putSignedUrl: ControllerMethod;
  uploadProfilePic: ControllerMethod;
}

export default Controller;
