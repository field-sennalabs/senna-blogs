import { config } from "dotenv";
config();

import * as admin from "firebase-admin";
import { App } from "./app";
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

App.listen(9000, () => console.log("server run on port 9000"));
