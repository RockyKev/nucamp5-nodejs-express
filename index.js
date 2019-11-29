const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3001;

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.all("/dishes", (request, response, next) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
  next();
});

app.get('/dishes', (request, response, next) => {
    response.end('Will send all the dishes to you!');
});

app.post('/dishes', (request, response, next) => {
    response.end('Will add the dish: ' + request.body.name +  ' with details: ' + request.body.description);
});

app.put('/dishes', (request, response, next) => {
    response.statusCode = 403;
    response.end('PUT operation not supported on /DISHES');
});

app.delete('/dishes', (request, response, next) => {
    response.end('Deleting all the dishes!');
});

/* This is for DishId pages */
app.get('/dishes/:dishId', (request, response, next) => {
    response.end('Will send details of the dish: ' + request.params.dishId + ' to you!');
});

app.post('/dishes/:dishId', (request, response, next) => {
    response.statusCode = 403;
    response.end('POST operation not supported on /dishes' + request.params.dishId);
});

app.put('/dishes/:dishId', (request, response, next) => {
    // response.end('Will update the dish: ' + request.params.dishId);
    response.write('Updating the dish: '  + request.params.dishId + '\n');
    response.end('Will update the dish: ' + request.body.name + ' with details: ' + request.body.description);
});

app.delete('/dishes/:dishId', (request, response, next) => {
    response.end('Deleting dish: ' + request.params.dishId);
});




app.use((request, response, next) => {
  console.log(request.headers);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
