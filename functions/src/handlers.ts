import express from "express";
import { ValidationError } from "yup";

export function requestHandler<T>(
  handler: (request: express.Request) => Promise<T>
) {
  return async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const result = await handler(request);

      response.json(result);
    } catch (error) {
      next(error);
    }
  };
}

export function errorHandler(
  error: Error,
  request: express.Request,
  response: express.Response,
  _: express.NextFunction
) {
  const status = error instanceof ValidationError ? 400 : 500;

  response.status(status).json({ message: error.message, stack: error.stack });
}
