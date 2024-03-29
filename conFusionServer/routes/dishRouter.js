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
        request.body.description +
        " and " +
        request.headers.thing
    );
  })

  .put((request, response, next) => {
    response.statusCode = 403;
    response.end("PUT operation not supported on /DISHES");
  })

  .delete((request, response, next) => {
    response.end("Deleting all the dishes!");
  });

dishRouter
  .route("/:dishId")
  // .route("/:dishId/recipe/:recipeId")

  .all((request, response, next) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((request, response, next) => {
    response.end(
      "Will send details of the dish: " + request.params.dishId + " to you! "
      // + request.params.recipeId
    );
  })

  .post((request, response, next) => {
    response.end(
      "POST operation not supported on /dishes" + request.params.dishId
    );
  })

  .put((request, response, next) => {
    response.statusCode = 403;
    response.write("Updating the dish: " + request.params.dishId + "\n");
    response.end(
      "Will update the dish: " +
        request.body.name +
        " with details: " +
        request.body.description
    );
  })

  .delete((request, response, next) => {
    response.end("Deleting dish: " + request.params.dishId);
  });

module.exports = dishRouter;
