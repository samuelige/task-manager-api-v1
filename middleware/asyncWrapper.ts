import {Request, Response, NextFunction} from 'express';

const asyncWrapper = (component:Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await component(req, res, next);
        } catch (error) {
            next(error);
        }
    }
};

export default asyncWrapper;