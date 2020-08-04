import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../server';

async function authCheck(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const authHeaders = req.get('Authorization');
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    const { _id } = <any>jwt.verify(token, JWT_KEY);
    req.body.userId = _id;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}

export default authCheck;

/*
// TODO: email validation for later use
const validateEmail = (email: string): boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};
*/
