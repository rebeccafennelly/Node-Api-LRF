"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _firebase = require("../config/firebase");

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
    const response = await _firebase.firestore.collection("products").doc(product.id).set(product).catch(err => console.log(error));
  }

  static async destroy(id) {
    const response = await _firebase.firestore.collection("products").doc(id).delete();
  }

}

exports.default = Product;