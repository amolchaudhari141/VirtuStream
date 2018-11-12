const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/:number', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(fibonacci(req.params.number));

});

//Recursive program for the fibonacci series
function fibonacci(num) {
    if (num < 0) {
        return "Error! Only positive numbers accepted";
    }
    if (num <= 2)
        return [0, 1].slice(0, num);
    const res = fibonacci(num - 1);
    res.push(res[res.length - 1] + res[res.length - 2])
    return res;
}

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});