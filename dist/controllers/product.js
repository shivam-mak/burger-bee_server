"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.addProducts = void 0;
const products_1 = require("../utils/products");
const addProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, desc, img, price, options, productType } = req.body;
        const addResult = yield (0, products_1.addProduct)(title, price, productType, desc, img, options);
        if (!addResult)
            return res.status(400).json({ message: "Error adding product", success: false, data: null });
        res.status(200).json({
            message: "Product added successfully",
            success: true,
            data: addResult,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong",
            success: false,
            data: err,
        });
    }
});
exports.addProducts = addProducts;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, products_1.getAllProduct)();
        if (!data)
            return res.status(400).json({ message: "Error getting product", success: false, data: null });
        return res.status(200).json({
            message: "Views fetched successfully",
            success: true,
            data
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong",
            success: false,
            data: err,
        });
    }
});
exports.getAllProducts = getAllProducts;
