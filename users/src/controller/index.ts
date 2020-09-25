import signUp from './signUp';
import profile from './profile';
import signIn from './signIn';
import putSignedUrl from './putSignedUrl';
import uploadProfilePic from './uploadProfilePic';
import Controller from './index.d';

const controller: Controller = {
  signUp,
  signIn,
  profile,
  putSignedUrl,
  uploadProfilePic,
};

export default controller;
