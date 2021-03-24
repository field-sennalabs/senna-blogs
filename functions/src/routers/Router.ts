import { Router as ExpressRouter } from "express";

import { AuthRouter } from "./AuthRouter";
import { BlogRouter } from "./BlogRouter";

export const Router = ExpressRouter();

Router.use("/auth", AuthRouter);
Router.use("/blogs", BlogRouter);
