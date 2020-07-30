import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Users from '../models/Users';
const JWT_KEY = process.env.JWT_KEY || '';

async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const authHeaders = req.get('authorization');
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    const { _id } = <any>jwt.verify(token, JWT_KEY);
    const user = await Users.findOne({ _id });
    if (!user) return res.sendStatus(401);
    req.body.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}

export default checkAuth;

console.log('Erase below:');
/*
const validateEmail = (email: string): boolean => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export { validateEmail };
*/
