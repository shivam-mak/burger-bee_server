"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    }
});
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
