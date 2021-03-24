import * as admin from "firebase-admin";
import { Router as ExpressRouter } from "express";
import * as yup from "yup";
import { requestHandler } from "../handlers";
import { validateBody } from "../middlewares";

export const AuthRouter = ExpressRouter();

AuthRouter.post(
  "/register",
  validateBody(
    yup.object().shape({
      username: yup.string().lowercase().required(),
      name: yup.string().required(),
      password: yup.string().min(4),
    })
  ),
  requestHandler(async (request) => {
    const { username, password, name } = request.body;
    const userCollection = admin.firestore().collection("user");

    const list = await userCollection.where("username", "==", username).get();

    if (!list.empty) {
      throw new Error("Username already taken.");
    }

    const token = Buffer.from(`${username}|${password}`).toString("base64");

    await userCollection.doc(token).create({ username, name });
    await request.sdk.CreateAuthor({ id: username, username, name });

    return { data: { token } };
  })
);

AuthRouter.post(
  "/accessToken",
  validateBody(
    yup.object().shape({
      username: yup.string().required(),
      password: yup.string().min(4),
    })
  ),
  requestHandler(async (request) => {
    const { username, password } = request.body;
    const userCollection = admin.firestore().collection("user");

    const token = Buffer.from(`${username}|${password}`).toString("base64");

    const userDoc = await userCollection.doc(token).get();
    const user = userDoc.data();

    if (!user) {
      throw new Error("Invalid username/password");
    }

    return { data: { token } };
  })
);
