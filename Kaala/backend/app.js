const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


const routes = require('./routes');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use(routes);


app.listen(3000, (err) => {
    if (err) {
        console.log('Server error');
        process.exit(-1);
    }

    console.log('Server listening on port no 3000');
});