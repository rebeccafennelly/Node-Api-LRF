// import express from "express";
import logger from "morgan";
import productsRoutes from "./routes/products";
import swaggerUI from "swagger-ui-express";
// import swaggerDocument from './swagger.json'
import { resolvePlugin } from "@babel/core";
import { swaggerDocument } from "./docs/swagger";

const port = process.env.PORT || '3000';
const express = require( "express" );
const subpath = express();
const app = express();
const argv = require('minimist')(process.argv.slice(2));
const bodyParser = require( 'body-parser' );
const swagger = require('swagger-node-express').createNew(subpath);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRoutes);
app.use(bodyParser());
app.use("/v1", subpath);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.static('dist'));

swagger.setApiInfo({
  title: "Long Range Fuel NODE-API",
  description: "A CRUD style API of nutritional products, in NodeJs",
  termsOfServiceUrl: "",
  contact: "rebeccafennelly115@gmail.com",
  license: "",
  licenseUrl: ""
});

// Set api-doc path
// swagger.configureSwaggerPaths('', 'api-docs', '');

// Start the web server
app.listen(port);
app.get('/api', (req, res) => res.status(200).send({ message: "Welcome to the Long Range Fuel API!" }));

