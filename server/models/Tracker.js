let mongoose = require('mongoose');

//create a model class
let taskModel = mongoose.Schema({
    Job:String,
    Salary:String,
    Description:String, 
    Company:String
},
{
    collection:"Jobs"
});

module.exports = mongoose.model('Task', taskModel);
