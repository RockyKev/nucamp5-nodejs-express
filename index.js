const express = require('express');
const http = require('http');

const hostname= 'localhost';
const port = 3001;

const app = express();

app.use((request, response, next) => {
    //next is an optional parameter

    console.log(request.headers);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<html><body><h1>This is a Express Server </h1></body> </html>');
});


const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

