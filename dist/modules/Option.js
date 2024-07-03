"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const optionSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    additionalPrice: {
        type: Number,
        required: true,
    }
});
const Option = mongoose_1.default.model("Option", optionSchema);
exports.default = Option;
