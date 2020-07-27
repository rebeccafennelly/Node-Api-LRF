import { Router } from "express";
import * as products from "../controllers/products.controller";

const router = Router ();

// INDEX route
router.get('/', products.findAll)
// SHOW route
router.get('/:id', products.find);
// CREATE route
router.post('/', products.create)
// DELETE route
router.delete('/:id', products.destroy)

export default router;