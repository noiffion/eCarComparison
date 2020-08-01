import Controller from './interface';
import getECars from './car/getECars';
import getOneCar from './car/getOneCar';
import signUp from './user/signUp';
import profile from './user/profile';
import login from './user/login';
import readRevs from './review/readRevs';
import createRev from './review/createRev';
import updateRev from './review/updateRev';
import deleteRev from './review/deleteRev';

const controller: Controller = {
  getECars,
  getOneCar,
  signUp,
  login,
  profile,
  readRevs,
  createRev,
  updateRev,
  deleteRev,
};

export default controller;
