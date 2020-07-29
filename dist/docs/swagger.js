"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swaggerDocument = void 0;
const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Long Range Fuel NODE_API",
    "description": "Node-API Spec for Swagger",
    "termsOfService": "http://swagger.io/terms/"
  },
  "basePath": "/",
  "tags": [{
    "name": "Long Range Fuel",
    "description": "API for Long Range Fuel product details"
  }],
  "schemes": ["https"],
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "paths": {
    "/products": {
      "get": {
        "tags": ["Long Range Fuel"],
        "summary": "Get all products in system",
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/products"
            }
          }
        }
      },
      "post": {
        "tags": ["Long Range Fuel"],
        "summary": "Create a new product in system",
        "requestBody": {
          "description": "Product Object",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/products"
              }
            }
          }
        },
        "produces": ["application/json"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/products/id"
            }
          },
          "400": {
            "description": "Failed. Bad data post."
          }
        }
      }
    },
    "/products/{id}": {
      "parameters": [{
        "name": "id",
        "in": "path",
        "required": true,
        "description": "ID of the product that we want to match",
        "type": "string"
      }],
      "get": {
        "tags": ["Long Range Fuel"],
        "summary": "Get product with given ID",
        "parameters": [{
          "in": "path",
          "name": "id",
          "required": true,
          "description": "Product with id",
          "schema": {
            "$ref": "#/products/id"
          }
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/id"
            }
          },
          "404": {
            "description": "Failed. Product not found."
          }
        }
      },
      "delete": {
        "summary": "Delete product with given ID",
        "tags": ["Long Range Fuel"],
        "parameters": [{
          "in": "path",
          "name": "id",
          "required": true,
          "description": "Delete product with id",
          "schema": {
            "$ref": "#/products/id"
          }
        }],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/products/id"
            }
          },
          "404": {
            "description": "Failed. Product not found."
          }
        }
      }
    }
  },
  "definitions": {
    "id": {
      "properties": {
        "uuid": {
          "type": "string"
        }
      }
    },
    "products": {
      "type": "object",
      "properties": {
        "containsAddedCaffeine": {
          "type": "boolean"
        },
        "containsAddedProtein": {
          "type": "boolean"
        },
        "containsAshwagandha": {
          "type": "boolean"
        },
        "flavour": {
          "type": "string"
        },
        "ingredients": {
          "type": "string"
        }
      }
    }
  }
};
exports.swaggerDocument = swaggerDocument;