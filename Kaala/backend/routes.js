const express = require('express');
const faker = require('faker');

const employeesRouter = express.Router();
const listOfEmployees = require('./mock-employees');

employeesRouter.get('/api/employees', (req, res) => {
     res.status(200).send(listOfEmployees);
    
});

employeesRouter.get('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params['id'], 10);

    const selectedEmployee = listOfEmployees.find(employee => employee.id === employeeId);
    if (selectedEmployee)
        res.status(200).send(selectedEmployee);
    else
        res.status(500).send('Not Found');
});

employeesRouter.post('/api/employees', (req, res) => {
    const newEmployee = req.body;
    newEmployee.id = faker.random.number(1000);
    console.log(newEmployee);
    listOfEmployees.push(newEmployee);
    res.status(201).send(newEmployee);
    
});

module.exports = employeesRouter;

