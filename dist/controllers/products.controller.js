"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroy = exports.create = exports.find = exports.findAll = void 0;

var _products = _interopRequireDefault(require("../models/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findAll = async (req, res) => {
  const products = await _products.default.findAll();
  res.status(200).send({
    products
  });
};

exports.findAll = findAll;

const find = async (req, res) => {
  const product = await _products.default.find(req.params.id);
  res.status(200).send({
    product
  });
};

exports.find = find;

const create = (req, res) => {
  const newProduct = new _products.default(req.body);
  newProduct.save();
  res.status(201).send({
    message: "Product successfully created",
    "product": newProduct
  });
};

exports.create = create;

const destroy = (req, res) => {
  _products.default.destroy(req.params.id);

  res.status(202).send({
    message: "Product successfully deleted"
  });
};

exports.destroy = destroy;