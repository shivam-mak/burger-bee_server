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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = void 0;
const Products_1 = __importDefault(require("../modules/Products"));
const Option_1 = __importDefault(require("../modules/Option"));
const addProduct = (title, price, desc, img, options) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new Products_1.default({ title, desc, img, price });
    let productId = newProduct._id.toString();
    yield newProduct.save();
    if (options) {
        options.map((elem) => __awaiter(void 0, void 0, void 0, function* () {
            const newOption = new Option_1.default({ title: elem.title, additionalPrice: elem.additionalPrice, productId });
            yield newProduct.save();
        }));
    }
    return newProduct;
});
exports.addProduct = addProduct;
