"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var products = _interopRequireWildcard(require("../controllers/products.controller"));

var _uuid = require("uuid");

var _firebase = require("../config/firebase");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Product {
  constructor(data) {
    this.id = (0, _uuid.v4)();
    this.flavour = data.flavour;
    this.ingredients = data.ingredients;
    this.containsAddedProtein = data.containsAddedProtein;
    this.containsAddedCaffeine = data.containsCaffeine;
    this.containsAshwagandha = data.containsAshwagandha;
    this.dateCreated = new Date().toUTCString();
  }

  static async findAll() {
    const response = await _firebase.firestore.collection("products").get();
    return response.docs.map(doc => doc.data());
  }

  static async find(id) {
    const response = await _firebase.firestore.collection("products").doc(id).get();
    return response.data();
  }

  static async findByUserId(userId) {
    const response = await _firebase.firestore.collection("products").where("userId", "==", userId).get();
    return response.docs.map(doc => doc.data());
  }

  async save() {
    this.dateModified = new Date().toUTCString();
    const product = { ...this
    };
    const response = await _firebase.firestore.collection("products").doc(product.id).set(product);
  }

  static async destroy(id) {
    const response = await _firebase.firestore.collection("products").doc(id).delete();
  }

}

exports.default = Product;