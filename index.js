const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");
const hostname = "localhost";
const port = 3001;

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//this is mounted to dishes -> dishRouter
app.use("/dishes", dishRouter);
app.use("/leaders", leaderRouter);
app.use("/promotions", promoRouter);
//app.use("/dishes/:dishId", dishIdRouter);

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
