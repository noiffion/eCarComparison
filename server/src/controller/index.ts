import Controller from './interface';
import getCars from './car/getCars';
import getOneCar from './car/getOneCar';
import signUp from './user/signUp';
import profile from './user/profile';
import login from './user/login';
import readMsgs from './message/readMsgs';
import createMsg from './message/createMsg';
import updateMsg from './message/updateMsg';
import deleteMsg from './message/deleteMsg';

const controller: Controller = {
  getCars,
  getOneCar,
  signUp,
  login,
  profile,
  readMsgs,
  createMsg,
  updateMsg,
  deleteMsg,
};

export default controller;
