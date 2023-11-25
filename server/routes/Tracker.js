// CRUD --> CREATE, READ, UPDATE, DELETE
var express = require('express');
var router = express.Router();
let Task = require('../models/Tracker');
let JobController = require('../controllers/Tracker')

// READ OPERATION ----------------------------------------------------
// get route for the bio books list
// if you get something, put it in the booklist
router.get('/', JobController.displayJoblist); 

// CREATE OPERATION ----------------------------------------------------
// get route for Add Book page 
router.get('/add', JobController.AddJob);

// post route for Add Book page
router.post('/add', JobController.ProcessJob);

// UPDATE OPERATION ----------------------------------------------------
// get route for displaying the Edit Book page 
router.get('/edit/:id', JobController.EditJob);

// post route for processing the Edit Book page
router.post('/edit/:id', JobController.ProcessEditJob);

//DELETE OPERATION ----------------------------------------------------
// get to perform delete operation
router.get('/delete/:id', JobController.DeleteJob);

module.exports = router;