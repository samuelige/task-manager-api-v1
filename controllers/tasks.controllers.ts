import { NextFunction, Request, Response } from 'express';
import asyncWrapper from '../middleware/asyncWrapper';
import Task from '../models/Task';
import { createCustomError } from '../errors/customError';


const createTask = asyncWrapper(async(req:Request, res:Response) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

const getTask = asyncWrapper(async(req:Request, res:Response, next:NextFunction) => {
    const {id: taskId} = req.params;
    const task = await Task.findOne({_id: taskId})
    if (!task) {
        return next(createCustomError(`No task with id ${taskId}`, 404))
    }
    res.status(200).json({task});
});

const getAllTasks = asyncWrapper(async(_req:Request, res:Response) => {
    const task = await Task.find({})
    res.status(200).json({task});
});

const updateTask = (req:Request, res:Response) => {
    res.status(200).send("updateTask")
};
const deleteTask = (req:Request, res:Response) => {
    res.status(200).send("deleteTask")
};

export {
    createTask,
    getTask,
    getAllTasks,
    updateTask,
    deleteTask,
};