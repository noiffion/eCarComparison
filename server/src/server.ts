import express, {
  Request,
  Response,
  NextFunction
} from 'express';
import console from './misc/console';

const PORT = 3003;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(PORT, () => console.info(`eCarComp is running on port: ${PORT}`));