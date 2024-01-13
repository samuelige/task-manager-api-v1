import { Request, Response } from 'express';
import asyncWrapper from '../middleware/asyncWrapper';
import Task from '../models/Task';


const createTask = asyncWrapper(async(req:Request, res:Response) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
});
const getTask = (req:Request, res:Response) => {
    res.status(200).send("getTasks")
};
const getAllTasks = (req:Request, res:Response) => {
    res.status(200).send("getAllTasks")
};
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