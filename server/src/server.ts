import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import console from './utils/console';
import router from './router';
import cors from 'cors';

dotenv.config({ path: __dirname + '/.env' });
export const JWT_KEY = process.env.JWT_KEY || '';
const PORT = process.env.PORT;

export const awsConf = {
  AWS_BUCKET: process.env.AWS_BUCKET,
  AWS_REGION: process.env.AWS_REGION,
  AWS_PROFILE: process.env.AWS_PROFILE,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
};

const MONGO_USERNAME = process.env.DB_UNAME;
const MONGO_PASSWORD = process.env.DB_PWD;
const MONGO_PATH = process.env.DB_PATH;
let mongoURL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_PATH}`;

const app = express();

mongoURL = 'mongodb://localhost:27017/eCars';
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
    app.use(router);
    app.get('*', (req: Request, res: Response): void => {
      res.status(404);
      res.send('Not found the page you have been looking for!');
    });
    app.listen(PORT, () => console.info(`eCarComp server is running on port: ${PORT}`));
  })
  .catch(console.error);
