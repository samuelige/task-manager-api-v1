"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tasks_controllers_1 = require("../controllers/tasks.controllers");
var taskRouter = (0, express_1.Router)();
taskRouter.route('/').get(tasks_controllers_1.getAllTasks).post(tasks_controllers_1.createTask);
taskRouter.route('/:id').get(tasks_controllers_1.getTask).put(tasks_controllers_1.updateTask).delete(tasks_controllers_1.deleteTask);
exports.default = taskRouter;
