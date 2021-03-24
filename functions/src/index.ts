import * as functions from "firebase-functions";
import { App } from "./app";

export const api = functions.https.onRequest(App);
