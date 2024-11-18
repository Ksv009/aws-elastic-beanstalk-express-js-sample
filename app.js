const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Testing Nodejs Application with CICD Pipeline test. Add New Test From source Code'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
