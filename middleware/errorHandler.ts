import { Request, Response, NextFunction } from 'express';
import { CustomAPIError } from '../errors/customError';

const errorHandlerMiddleware = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' });
};

export default errorHandlerMiddleware;