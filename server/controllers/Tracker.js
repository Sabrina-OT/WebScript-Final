var express = require('express');
var router = express.Router();
let Task = require('../models/Tracker');

// module for displaying the task list
module.exports.displayJoblist = async (req, res, next) => {
    try{
        const TaskList = await Task.find();
        res.render('track/list', {
            title: "Track List",
            TaskList: TaskList
        });
    }
    catch(err){
        console.error(err);
        res.render('track/list', {
            error:'error on server'
        });
    }
};

// module for adding new tasks into the tasklist
module.exports.AddJob = (req, res, next) => {
    try{
        res.render('track/add',
        {
            title: 'Add Task'
        })
    }
    catch(err){
        console.error(err);
        res.render('track/list', {
            error:'error on server'
        });
    }
};

// module for processing new tasks to be added
module.exports.ProcessJob = (req, res, next) => {
    try{
        let newTask = Task({
            "Job": req.body.Job,
            "Salary": req.body.Salary,
            "Description": req.body.Description,
            "Company": req.body.Company
        });
        Task.create(newTask).then(() => {
            res.redirect('/tracklist')
        })
    }

    catch(err){
        console.error(err);
        res.render('track/list', {
            error:'error on server'
        });
    }
};

// module for editing tasks displayed in the table
module.exports.EditJob = async (req, res, next) => {
    try{
        const id = req.params.id;
        const taskToEdit = await Task.findById(id);
        res.render('track/edit',
        {
            title: 'Edit Task',
            Task: taskToEdit
        })
    }
    catch(err){
        console.error(err);
        res.render('track/list', {
            error:'error on server'
        });
    }
    
};

//module for processing edited tasks to be displayed in the table
module.exports.ProcessEditJob = (req, res, next) => {
    try{
        const id = req.params.id;
        let updatedTask = Task({
            "_id": id,
            "Job": req.body.Job,
            "Salary": req.body.Salary,
            "Description": req.body.Description,
            "Company": req.body.Company
        })
        Task.findByIdAndUpdate(id, updatedTask).then(() =>{
            res.redirect('/tracklist')
        });
    }
    catch(err){
        console.error(err);
        res.render('track/list', {
            error:'error on server'
        });
    }
};

// module for deleting tasks in the table
module.exports.DeleteJob = async (req, res, next) => {
    try{
        let id = req.params.id;
        Task.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/tracklist')
        })
    }
    catch(err){
        console.error(err);
        res.render('track/list', {
            error:'error on server'
        });
    }
};
