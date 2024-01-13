import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../controllers/tasks.controllers";

const taskRouter = Router();

taskRouter.route('/').get(getAllTasks).post(createTask);
taskRouter.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

export default taskRouter;