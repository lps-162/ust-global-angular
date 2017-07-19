const express = require('express');
const faker = require('faker');

const employeesRouter = express.Router();
const listOfEmployees = require('./mock-employees');

employeesRouter.get('/api/employees', (req, res) => {
    res.send(listOfEmployees);
});

employeesRouter.get('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params['id']);

    const selectedEmployee = listOfEmployees.find(e => e.id === employeeId);
    res.send(selectedEmployee);
});

employeesRouter.post('/api/employees', (req, res) => {
    const newEmployeeObject = req.body;
    console.log(newEmployeeObject);
    res.send('Create employee');
    newEmployeeObject.id = faker.random.number(1000);
    listOfEmployees.push(newEmployeeObject);
});

module.exports = employeesRouter;

