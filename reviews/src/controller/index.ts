import Controller from './controller';
import readRevs from './readRevs';
import createRev from './createRev';
import updateRev from './updateRev';
import deleteRev from './deleteRev';

const controller: Controller = {
  readRevs,
  createRev,
  updateRev,
  deleteRev,
};

export default controller;
