import { NextFunction, Request, Response } from "express";

const nextFunc = (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).then(next).catch(next);
    };
};

const nextJoiFunc = (func: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch(next);
    };
};

export { nextFunc, nextJoiFunc };
