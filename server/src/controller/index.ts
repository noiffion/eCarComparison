import Controller from './controller';
import getECars from './car/getECars';
import getOneCar from './car/getOneCar';
import signUp from './user/signUp';
import profile from './user/profile';
import signIn from './user/signIn';
import putSignedUrl from './user/putSignedUrl';
import uploadProfilePic from './user/uploadProfilePic';
import readRevs from './review/readRevs';
import createRev from './review/createRev';
import updateRev from './review/updateRev';
import deleteRev from './review/deleteRev';

const controller: Controller = {
  getECars,
  getOneCar,
  signUp,
  signIn,
  profile,
  putSignedUrl,
  uploadProfilePic,
  readRevs,
  createRev,
  updateRev,
  deleteRev,
};

export default controller;
