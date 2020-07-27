import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import console from './misc/console';
import { UserResolver } from './resolvers/User';

dotenv.config({ path: __dirname + '/.env' });
const PORT = process.env.PORT;
const MONGO_USERNAME = process.env.DB_UNAME;
const MONGO_PASSWORD = process.env.DB_PWD;
const MONGO_PATH = process.env.DB_PATH;
const mongoURL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_PATH}`;


async function graphQLServer() {

  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: true,
  });

  const app = express();

  mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
    .then(() => {
      console.info('Successfully connected to the Mongo database!');

      const server = new ApolloServer({
        schema,
        context: () => ({}),
      });

      server.applyMiddleware({ app });
      app.listen(PORT, () => console.info(`eCarComp server is running on port: ${PORT}`));
    })
    .catch(console.error);
}

graphQLServer();
