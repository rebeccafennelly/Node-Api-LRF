"use strict";

var _morgan = _interopRequireDefault(require("morgan"));

var _products = _interopRequireDefault(require("./routes/products"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _core = require("@babel/core");

var _swagger = require("./docs/swagger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import express from "express";
// import swaggerDocument from './swagger.json'
const port = process.env.PORT || '3000';

const express = require("express");

const subpath = express();
const app = express();

const argv = require('minimist')(process.argv.slice(2));

const bodyParser = require('body-parser');

const swagger = require('swagger-node-express').createNew(subpath);

app.use((0, _morgan.default)('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/api/products', _products.default);
app.use(bodyParser());
app.use("/v1", subpath);
app.use('/docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.swaggerDocument));
app.use(express.static('dist'));
swagger.setApiInfo({
  title: "Long Range Fuel NODE-API",
  description: "A CRUD style API of nutritional products, in NodeJs",
  termsOfServiceUrl: "",
  contact: "rebeccafennelly115@gmail.com",
  license: "",
  licenseUrl: ""
}); // Set api-doc path
// swagger.configureSwaggerPaths('', 'api-docs', '');
// Start the web server

app.listen(port);
app.get('/api', (req, res) => res.status(200).send({
  message: "Welcome to the Long Range Fuel API!"
}));