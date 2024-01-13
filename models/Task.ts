import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
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
})

const Task = mongoose.model('Task',TaskSchema)

export default Task;