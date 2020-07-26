import * as products from "../controllers/products.controller";
import { v4 as uuid } from 'uuid';
import { firestore } from '../config/firebase';

export default class Product {
  constructor (data){
    this.userId = data.user || ","
    this.flavour = data.flavour,
    this.ingredients = data.ingredients,
    this.containsAddedProtein = data.containsAddedProtein,
    this.containsAddedCaffeine = data.containsCaffeine,
    this.containsAshwagandha = data.containsAshwagandha
    this.dateCreated = new Date().toUTCString();
  }

static async findAll() { 
  const response = await firestore.collection("products").get();
  return response.docs.map(doc => doc.data());
}

static async find(id) {
  const response = await firestore.collection("products").doc(id).get();
  return response.data();
}

static async findByUserId(userId) {
  const response = await firestore
      .collection("products")
      .where("userId", "==", userId)
      .get();
  return response.docs.map(doc => doc.data());
}
  
async save() {
    this.dateModified = new Date().toUTCString();
    const products = {...this};
    const response = await firestore.collection("products").doc(product.id).set(product);
}

static async destroy(id) {
  const response = await firestore.collection("products").doc(id).delete();
}

}