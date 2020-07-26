"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _products = _interopRequireDefault(require("./routes/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.PORT || '3000';
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use('/api/products', _products.default); // INDEX route

app.get('/api/products', (req, res) => res.status(200).send({
  message: "Got all the products!"
})); // SHOW route

app.get("/api/products/:id", (req, res) => res.status(200).send({
  message: `Got one product with id: ${req.params.id}`
})); // // CREATE route

app.post('/api/products', (req, res) => res.status(201).send({
  message: "Successfully created my own LRF product"
})); // // DELETE route

app.delete('/api/products/:id', (req, res) => res.status(204).send({
  message: "Deleted the product with id: " + req.params.id
})); // Get request to API

app.get('/api', (req, res) => res.status(200).send({
  message: "Welcome to the Long Range Fuel API!"
}));
app.listen(port, () => console.log(`Server is listening on port ${port}.`));
var _default = app;
exports.default = _default;