"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var TaskSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [25, 'name can not exceed 25 characters']
    },
    status: {
        type: String,
        enum: ['todo', 'doing', 'done'],
        default: 'todo',
    }
});
var Task = mongoose_1.default.model('Task', TaskSchema);
exports.default = Task;
