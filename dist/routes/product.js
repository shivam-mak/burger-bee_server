"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.post("/", product_1.addProducts);
router.get("/", product_1.getAllProducts);
exports.default = router;
