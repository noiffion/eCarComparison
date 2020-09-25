import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import console from './utils/console';
import router from './router';
import cors from 'cors';

export const JWT_KEY = process.env.JWT_KEY || '';
const PORT = process.env.PORT;
const MONGO = {
  UNAME: process.env.DB_UNAME,
  PWD: process.env.DB_PWD,
  PATH: process.env.DB_PATH,
}
const mongoURL = `mongodb+srv://${MONGO.UNAME}:${MONGO.PWD}${MONGO.PATH}`;

const app = express();

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.info('Successfully connected to the Mongo database!');

    app.use(cors({ origin: 'http://localhost:3003', credentials: true }));
    app.use(express.json());
    app.get('/', (req: Request, res: Response): void => {
      res.status(200);
      res.send('eCar API root');
    });
    app.use('/api/', router);
    app.get('*', (req: Request, res: Response): void => {
      res.status(404);
      res.send('Not found the page you have been looking for!');
    });
    app.listen(PORT, () => console.info(`eCarComp server is running on port: ${PORT}`));
  })
  .catch(console.error);
