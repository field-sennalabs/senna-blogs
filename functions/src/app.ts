import express from "express";
import cors from "cors";
import { GraphQLClient } from "graphql-request";
import * as functions from "firebase-functions";

import { Router } from "./routers/Router";
import { errorHandler } from "./handlers";
import { getSdk } from "./generated/graphql";
import * as admin from "firebase-admin";

const config = functions.config();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export const App = express();

App.use(express.json());
App.use(cors());
App.use((request, response, next) => {
  const client = new GraphQLClient(
    "https://cosmic-grouper-29.hasura.app/v1/graphql",
    {
      headers: { "x-hasura-admin-secret": config.hasura.key },
    }
  );

  request.sdk = getSdk(client);

  next();
});
App.use(Router);

App.use(errorHandler);
