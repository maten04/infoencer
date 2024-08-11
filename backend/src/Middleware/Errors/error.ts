import { NextFunction, Request, Response } from "express";
import { logger } from "../Logs/logger";
import { CustomError } from "./CustomError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError) {
    logger.error(`${req.method} ${req.url} ${err.statusCode}`);
    return res.status(err.statusCode).send({errors: err.errors});
  }

  logger.error(`${req.method} ${req.url} ${500}`);
  return res.status(500).send({ errors: [{ message: err.message }] });
};
