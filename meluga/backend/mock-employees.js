const faker = require('faker');

let listOfEmployees = [];
for (let i=0; i<3; i++) {
    let newEmpObj = {
        id: faker.random.number(1000),
        emp_no: faker.random.alphaNumeric(6),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        city: faker.address.city(),
        photo_url: faker.image.imageUrl()
    };

    listOfEmployees.push(newEmpObj);
}

module.exports = listOfEmployees;