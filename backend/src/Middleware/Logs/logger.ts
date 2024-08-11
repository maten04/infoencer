import { NextFunction, Request, Response } from "express";
import * as winston from "winston";

const { colorize, timestamp, align, printf, combine } = winston.format;

const myFormat = combine(
  winston.format.cli(),
  timestamp({
    format: "YYYY-MM-DD hh:mm:ss",
  }),
  align(),
  printf((info) => `[${info.timestamp}] ${info.message}`)
);

const options = {
  console: {
    handleExceptions: true,
    level: "debug",
    format: combine(colorize(), myFormat),
  },
  file: {
    filename: "logs.log",
    level: "debug",
    format: combine(myFormat),
  },
};

export const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console(options["console"]),
    new winston.transports.File(options["file"]),
  ],
});

const loggerMiddelware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url} ${res.statusCode}`);
  next();
};

export default loggerMiddelware;
