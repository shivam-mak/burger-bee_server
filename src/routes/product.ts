import { Router } from "express";
import { addProducts, getAllProducts } from "../controllers/product";

const router :Router = Router();

router.post("/", addProducts);
router.get("/", getAllProducts);

export default router;