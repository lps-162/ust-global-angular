const express = require('express');

const employeesRouter = express.Router();
const listOfEmployees = require('./mock-employees');

employeesRouter.get('/api/employees', (req, res) => {
    res.send(listOfEmployees);
});

employeesRouter.get('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params['id']);

    const selectedEmployee = listOfEmployees.find(e => e.id === employeeId);
    res.send(selectedEmployee);
})

module.exports = employeesRouter;

