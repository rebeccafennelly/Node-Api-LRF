import Product from "../models/products";

export const findAll = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).send({ products });
}
export const find = async (req, res) => {
  const product = await Product.find(req.params.id);
  res.status(200).send({ product })
}

export const create = (req, res) => {
  const newProduct = new Recipe(req.body);
  newRecipe.save();
  res.status(201).send({
      message: "Product successfully created",
      "product": newProduct
  });
}

export const destroy = (req, res) => {
  Product.destroy(req.params.id);
  res.status(202).send({
      message: "Product successfully deleted"
  })
}