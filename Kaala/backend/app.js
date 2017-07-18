const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');

app.use(cors());
app.use(routes);


app.listen(3000, (err) => {
    if (err) {
        console.log('Server error');
        process.exit(-1);
    }

    console.log('Server listening on port no 3000');
});