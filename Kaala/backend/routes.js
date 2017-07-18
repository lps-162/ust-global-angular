const express = require('express');

const employeesRouter = express.Router();
const listOfEmployees = require('./mock-employees');

employeesRouter.get('/api/employees', (req, res) => {
     
    res.send(listOfEmployees);
});

module.exports = employeesRouter;

