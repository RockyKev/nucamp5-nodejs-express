const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route("/")

  .all((request, response, next) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((request, response, next) => {
    response.end("Will send all the dishes to you!");
  })

  .post((request, response, next) => {
    response.end(
      "Will add the dish: " +
        request.body.name +
        " with details: " +
        request.body.description
    );
  })

  .put((request, response, next) => {
    response.statusCode = 403;
    response.end("PUT operation not supported on /DISHES");
  })

  .delete((request, response, next) => {
    response.end("Deleting all the dishes!");
  });

  module.exports = dishRouter;

