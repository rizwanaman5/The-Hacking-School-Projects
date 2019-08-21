const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "this is a required field"]
    },
    description: String,
    dueDate: String
})

const TASKS = mongoose.model('TASKS', taskSchema);

module.exports = TASKS