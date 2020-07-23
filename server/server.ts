import * as express from 'express';
import console from './misc/console';

const PORT = 3003;

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(PORT, () => console.info(`App running on port: ${PORT}`));
