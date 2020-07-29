import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import console from './misc/console';
import router from './router';
import cors from 'cors';

dotenv.config({ path: __dirname + '/.env' });
const PORT = process.env.PORT;
const MONGO_USERNAME = process.env.DB_UNAME;
const MONGO_PASSWORD = process.env.DB_PWD;
const MONGO_PATH = process.env.DB_PATH;
const mongoURL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_PATH}`;

const app = express();

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.info('Successfully connected to the Mongo database!');

    app.use(cors());
    app.use(express.json());
    app.use(router);
    app.get('*', (req: Request, res: Response): void => {
      res.status(404);
      res.send('Not found the page you have been looking for!');
    });
    app.listen(PORT, () => console.info(`eCarComp server is running on port: ${PORT}`));
  })
  .catch(console.error);
