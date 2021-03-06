const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type : String,
        required: true
    },
    completed:{
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;