const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi there! I just edited this code. Hopefully, it was a good one :)'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
