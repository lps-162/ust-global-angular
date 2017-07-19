const express = require('express');

const employeesRouter = express.Router();
const listOfEmployees = require('./mock-employees');

employeesRouter.get('/api/employees', (req, res) => {
    res.send(listOfEmployees);
});

employeesRouter.get('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params['id'], 10);

    const selectedEmployee = listOfEmployees.find(employee => employee.id === employeeId);
    if (selectedEmployee)
        res.send(selectedEmployee);
    else
        res.send('Not Found');
});

module.exports = employeesRouter;

