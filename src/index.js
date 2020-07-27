import express from "express";
import logger from "morgan";
import productsRoutes from "./routes/products";

const app = express();
const port = process.env.PORT || '3000';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRoutes);


// INDEX route
// app.get('/api/products', (req, res) => res.status(200).send({
//     message: "Got all the products!"
// }))
// // SHOW route
// app.get("/api/products/:id", (req, res) => res.status(200).send({
//   message: `Got one product with id: ${req.params.id}`
// }));
// // // CREATE route
// app.post('/api/products', (req, res) => res.status(201).send({
//     message: "Successfully created my own LRF product"
// }))
// // // DELETE route
// app.delete('/api/products/:id', (req, res) => res.status(204).send({
//     message: "Deleted the product with id: " + req.params.id
// }))

// Get request to API
app.get('/api', (req, res) => res.status(200).send({ message: "Welcome to the Long Range Fuel API!" }));


app.listen(port, () => console.log(`Server is listening on port ${port}.`));

export default app;
